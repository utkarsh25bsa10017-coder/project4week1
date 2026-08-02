export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 text-center md:pt-32">
        <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300">
          Built in Bengaluru · Backed by AI
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Turn raw data into{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            decisions
          </span>
          , in real time.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Kavya Labs is the AI analytics platform that plugs into your data
          stack and surfaces insights, anomalies, and forecasts — before you
          even ask.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="w-full rounded-lg bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 sm:w-auto"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="w-full rounded-lg border border-white/15 px-8 py-3.5 text-base font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
          >
            See How It Works
          </a>
        </div>

        {/* stats */}
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            ["10B+", "events processed daily"],
            ["99.99%", "platform uptime"],
            ["500+", "teams shipping faster"],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="text-3xl font-bold text-white">{stat}</dt>
              <dd className="mt-1 text-sm text-slate-400">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
