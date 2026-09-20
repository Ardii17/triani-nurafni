import { profile, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 py-10 dark:border-paper/10">
      <div className="container-page flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base font-semibold text-navy-900 dark:text-paper">
            {profile.name}, {profile.degree}
          </p>
          <p className="mt-0.5 font-mono text-xs text-ink-500 dark:text-ink-300">
            &copy; {new Date().getFullYear()} {profile.name}. Seluruh hak cipta dilindungi.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-mono text-xs tracking-wide text-ink-700 transition-colors hover:text-gold-600 dark:text-ink-300 dark:hover:text-gold-400"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
