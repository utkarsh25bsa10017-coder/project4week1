import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export const metadata = {
  title: "Dashboard — TaskFlow",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const { user } = session;

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/"
          className="text-sm text-indigo-400 transition hover:text-indigo-300"
        >
          ← Back to home
        </Link>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-4">
            {user?.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt={user?.name ?? "User avatar"}
                className="h-16 w-16 rounded-full border border-white/20"
                referrerPolicy="no-referrer"
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-white">
                Welcome, {user?.name} 👋
              </h1>
              <p className="text-slate-400">{user?.email}</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Plan", "Free Trial"],
              ["Role", "Member"],
              ["Status", "Active ✅"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-sm text-indigo-300">
            🔒 This page is protected by NextAuth + Google OAuth. You can only
            see it because you signed in. Week 3 will add the full admin
            dashboard here.
          </p>
        </div>
      </div>
    </main>
  );
}
