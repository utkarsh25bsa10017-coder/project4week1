import GoogleSignInButton from "../../components/GoogleSignInButton";

export const metadata = {
  title: "Sign In — TaskFlow",
};

export default function LoginPage({ searchParams }) {
  const callbackUrl =
    typeof searchParams?.callbackUrl === "string"
      ? searchParams.callbackUrl
      : "/dashboard";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-lg font-bold text-white">
            T
          </span>
          <span className="text-xl font-semibold tracking-tight text-white">
            TaskFlow
          </span>
        </div>
        <h1 className="mt-6 text-center text-2xl font-bold text-white">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Sign in to your account — or create one instantly with Google.
        </p>
        <GoogleSignInButton callbackUrl={callbackUrl} />
        <p className="mt-6 text-center text-xs text-slate-500">
          New here? Your account is created automatically on first sign-in.
        </p>
        <a
          href="/"
          className="mt-4 block text-center text-sm text-indigo-400 transition hover:text-indigo-300"
        >
          ← Back to home
        </a>
      </div>
    </main>
  );
}
