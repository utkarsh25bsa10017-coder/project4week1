import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { demoUsers, signupTrend } from "../../lib/demoData";
import { formatDate, isAdmin } from "../../lib/utils";

export const metadata = {
  title: "Admin Dashboard — Kavya Labs",
};

function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

function Badge({ children, color }) {
  const colors = {
    indigo: "border-indigo-400/30 bg-indigo-500/10 text-indigo-300",
    slate: "border-white/15 bg-white/5 text-slate-300",
    green: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
    red: "border-red-400/30 bg-red-500/10 text-red-300",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (!isAdmin(session.user?.email)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink px-6">
        <div className="max-w-md rounded-2xl border border-red-400/20 bg-red-500/5 p-8 text-center">
          <p className="text-4xl">🚫</p>
          <h1 className="mt-4 text-2xl font-bold text-white">Access Denied</h1>
          <p className="mt-2 text-slate-400">
            This area is restricted to Kavya Labs admins. You are signed in as{" "}
            <span className="text-slate-200">{session.user?.email}</span>.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/5"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  // Merge the signed-in admin into the table (marked as "You")
  const users = [
    {
      id: "you",
      name: session.user?.name,
      email: session.user?.email,
      image: session.user?.image,
      role: "admin",
      status: "active",
      joinedAt: "2026-07-01",
      lastActive: "2026-08-02",
      signIns: 41,
      you: true,
    },
    ...demoUsers,
  ];

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;
  const adminCount = users.filter((u) => u.role === "admin").length;
  const newThisWeek = signupTrend.reduce((sum, d) => sum + d.signups, 0) + 1;
  const maxSignups = Math.max(...signupTrend.map((d) => d.signups), 1);

  return (
    <main className="min-h-screen bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-indigo-400 transition hover:text-indigo-300"
        >
          ← Back to home
        </Link>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="mt-1 text-slate-400">
              User management &amp; analytics · Signed in as{" "}
              <span className="text-slate-200">{session.user?.email}</span>
            </p>
          </div>
          <Badge color="indigo">Admin access</Badge>
        </div>

        {/* Analytics stat cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="Total Users" value={totalUsers} hint="all time" />
          <StatCard
            label="Active Users"
            value={activeUsers}
            hint={`${totalUsers - activeUsers} deactivated`}
          />
          <StatCard
            label="New This Week"
            value={newThisWeek}
            hint="last 7 days"
          />
          <StatCard label="Admins" value={adminCount} hint="with full access" />
        </div>

        {/* Signup trend chart */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold text-white">
            Signups — last 7 days
          </h2>
          <div className="mt-6 flex h-40 items-end gap-3">
            {signupTrend.map((d) => (
              <div
                key={d.day}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <span className="text-xs font-medium text-slate-300">
                  {d.signups}
                </span>
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-cyan-500"
                  style={{ height: `${(d.signups / maxSignups) * 100}%` }}
                />
                <span className="text-xs text-slate-500">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User management table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-6 py-4">
            <h2 className="text-lg font-semibold text-white">
              User Management
            </h2>
            <p className="text-sm text-slate-500">
              {totalUsers} registered users
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Role</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Joined</th>
                  <th className="px-6 py-3 font-medium">Last Active</th>
                  <th className="px-6 py-3 font-medium text-right">
                    Sign-ins
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {user.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={user.image}
                            alt={user.name}
                            className="h-9 w-9 rounded-full border border-white/20"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        )}
                        <div>
                          <p className="font-medium text-white">
                            {user.name}
                            {user.you && (
                              <span className="ml-2 text-xs text-indigo-400">
                                (You)
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge color={user.role === "admin" ? "indigo" : "slate"}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        color={user.status === "active" ? "green" : "red"}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      {formatDate(user.joinedAt)}
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      {formatDate(user.lastActive)}
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-300">
                      {user.signIns}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
