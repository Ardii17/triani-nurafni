import { education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  return (
    <section id="education" className="container-page py-20 sm:py-24">
      <SectionHeading eyebrow="03 · Pendidikan" title="Riwayat pendidikan" />

      <ol className="relative space-y-10 border-l border-navy-900/15 pl-8 dark:border-paper/15">
        {education.map((item, i) => (
          <Reveal key={item.id} delay={i * 100}>
            <li className="relative">
              <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gold-500 bg-paper dark:bg-navy-950" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-ink-500 dark:text-ink-300">{item.id}</span>
                <span className="font-mono text-xs tabular text-gold-600 dark:text-gold-400">
                  {item.startYear} — {item.endYear}
                </span>
              </div>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-navy-900 dark:text-paper">
                {item.institution}
              </h3>
              <p className="mt-1 text-ink-700 dark:text-ink-300">{item.program}</p>
              <p className="mt-1 font-medium text-navy-800 dark:text-paper/90">{item.degreeAwarded}</p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {item.gpa && (
                  <span className="rounded-full bg-navy-900/6 px-3 py-1 font-mono text-xs tabular text-navy-900 dark:bg-paper/8 dark:text-paper">
                    IPK {item.gpa}
                  </span>
                )}
              </div>
              {item.note && (
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {item.note}
                </p>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
