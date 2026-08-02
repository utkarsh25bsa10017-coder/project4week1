export default function CTA() {
  return (
    <section id="cta" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to get your tasks flowing?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
          Join hundreds of teams using TaskFlow to ship on time, every time.
          Free for 14 days — no credit card required.
        </p>
        <a
          href="/login"
          className="mt-10 inline-block rounded-lg bg-indigo-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
        >
          Start Your Free Trial
        </a>
      </div>
    </section>
  );
}
