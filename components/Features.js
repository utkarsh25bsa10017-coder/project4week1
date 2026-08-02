const features = [
  {
    icon: "⚡",
    title: "Real-Time Dashboards",
    description:
      "Stream millions of events into live dashboards with sub-second latency. No refresh button required.",
  },
  {
    icon: "🧠",
    title: "AI-Powered Insights",
    description:
      "Our models automatically surface trends, correlations, and the 'why' behind every metric movement.",
  },
  {
    icon: "🚨",
    title: "Anomaly Detection",
    description:
      "Get alerted the moment something breaks the pattern — revenue dips, traffic spikes, fraud signals.",
  },
  {
    icon: "📈",
    title: "Forecasting",
    description:
      "Predict next quarter's numbers with confidence intervals, powered by models trained on your data.",
  },
  {
    icon: "🔌",
    title: "50+ Integrations",
    description:
      "Connect Postgres, Snowflake, Stripe, Salesforce, and more in minutes — no pipelines to maintain.",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant with SSO, role-based access, and end-to-end encryption for your data at rest.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/5 bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Everything you need to understand your business
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            One platform that replaces your dashboards, alerts, and reporting
            spreadsheets.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40 hover:bg-white/[0.06]"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
