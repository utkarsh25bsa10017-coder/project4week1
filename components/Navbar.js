"use client";

import { useState } from "react";
import AuthButton from "./AuthButton";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-bold text-white">
            T
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            TaskFlow
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <AuthButton />

          {/* Hamburger toggle (mobile only) */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-white/30 hover:bg-white/5 md:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
