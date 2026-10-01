"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-900/10 bg-paper/90 backdrop-blur dark:border-paper/10 dark:bg-navy-950/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Navigasi utama">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-paper"
        >
          {profile.name.split(" ")[0]}
          <span className="text-gold-500">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] tracking-wide text-ink-700 transition-colors hover:text-navy-900 dark:text-ink-300 dark:hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.cvFile}
            download="CV-Triani-Nurafni.pdf"
            className="hidden rounded-full bg-navy-900 px-4 py-2 font-mono text-[12px] tracking-wide text-paper transition-colors hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 sm:inline-block"
          >
            Download CV
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 dark:border-paper/20 dark:text-paper lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy-900/10 bg-paper px-6 pb-6 pt-2 dark:border-paper/10 dark:bg-navy-950 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-mono text-sm text-ink-700 hover:bg-navy-900/5 dark:text-ink-300 dark:hover:bg-paper/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.cvFile}
              download="CV-Triani-Nurafni.pdf"
              className="mt-2 rounded-full bg-navy-900 px-4 py-2.5 text-center font-mono text-[12px] tracking-wide text-paper dark:bg-gold-500 dark:text-navy-950"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
