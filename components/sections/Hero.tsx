import { profile } from "@/lib/data";
import BalancedSeal from "@/components/ui/BalancedSeal";

const ledgerLines = [
  { label: "Ketelitian", dr: "Terverifikasi" },
  { label: "Ketepatan Waktu", dr: "Terverifikasi" },
  { label: "Integritas Data", dr: "Terverifikasi" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="ledger-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-gold-400/10 blur-3xl dark:bg-gold-400/10"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="reveal">
          <p className="section-eyebrow mb-5">Portofolio Profesional</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-navy-900 dark:text-paper sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 font-mono text-sm tracking-wide text-gold-600 dark:text-gold-400">
            {profile.fullDegree} ({profile.degree})
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 dark:text-ink-300">
            {profile.tagline}
          </p>

          <p className="mt-4 max-w-xl leading-relaxed text-ink-700 dark:text-ink-300">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvFile}
              download="CV-Triani-Nurafni.pdf"
              className="rounded-full bg-navy-900 px-6 py-3 font-mono text-[13px] tracking-wide text-paper shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="rounded-full border border-navy-900/20 px-6 py-3 font-mono text-[13px] tracking-wide text-navy-900 transition-colors hover:border-navy-900 dark:border-paper/25 dark:text-paper dark:hover:border-paper"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-10">
            <BalancedSeal />
          </div>
        </div>

        {/* Signature element: a trial-balance ledger card */}
        <div className="reveal [animation-delay:150ms]">
          <div className="mx-auto w-full max-w-sm rounded-lg border border-navy-900/10 bg-paper/80 p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-24px_rgba(10,27,51,0.35)] backdrop-blur dark:border-paper/10 dark:bg-navy-900/70">
            <div className="flex items-center justify-between border-b border-dashed border-navy-900/15 pb-3 dark:border-paper/15">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
                Neraca Saldo
              </span>
              <span className="font-mono text-[11px] text-ink-500 dark:text-ink-300">No. 001</span>
            </div>

            <dl className="mt-4 space-y-3">
              {ledgerLines.map((line, i) => (
                <div key={line.label} className="flex items-center justify-between text-sm">
                  <dt className="text-ink-700 dark:text-ink-300">{line.label}</dt>
                  <dd className="flex items-center gap-2">
                    <span className="h-1 w-16 overflow-hidden rounded-full bg-navy-900/10 dark:bg-paper/10">
                      <span
                        className="block h-full animate-tally rounded-full bg-balance-500"
                        style={
                          {
                            "--tally-w": "100%",
                            animationDelay: `${300 + i * 150}ms`,
                          } as React.CSSProperties
                        }
                      />
                    </span>
                    <span className="font-mono text-xs text-balance-600 dark:text-balance-400">{line.dr}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex items-center justify-between border-t border-navy-900/15 pt-3 font-mono text-xs dark:border-paper/15">
              <span className="tabular text-ink-500 dark:text-ink-300">Total Debit = Total Kredit</span>
              <span className="tabular font-semibold text-balance-600 dark:text-balance-400">Rp 0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
