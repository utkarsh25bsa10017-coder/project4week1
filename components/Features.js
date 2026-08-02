const features = [
  {
    icon: "🧠",
    title: "Smart Prioritization",
    description:
      "Our AI ranks every task by impact, effort, and deadline — so your team always works on what matters most.",
  },
  {
    icon: "⚡",
    title: "Real-Time Dashboards",
    description:
      "Live views of every project's progress. See blockers, workloads, and velocity update the second they change.",
  },
  {
    icon: "🚨",
    title: "Delay Prediction",
    description:
      "TaskFlow flags at-risk tasks before deadlines slip, based on your team's actual pace — not wishful thinking.",
  },
  {
    icon: "💬",
    title: "Team Collaboration",
    description:
      "Comments, mentions, and file sharing built into every task. No more context lost in chat threads.",
  },
  {
    icon: "🔌",
    title: "50+ Integrations",
    description:
      "Connect Slack, GitHub, Google Calendar, Jira, and more in minutes — your tools, finally talking to each other.",
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
    <section id="features" className="border-t border-white/5 bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Everything your team needs to stay in flow
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            One platform that replaces your task lists, standup meetings, and
            status-update spreadsheets.
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
