export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-bold text-white">
            K
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Kavya Labs
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
        <a
          href="#cta"
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
