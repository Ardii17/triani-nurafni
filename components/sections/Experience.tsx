import { experience } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const typeStyles: Record<string, string> = {
  Organisasi: "bg-navy-900 text-paper dark:bg-gold-500 dark:text-navy-950",
  Volunteer: "bg-gold-500 text-navy-950 dark:bg-gold-400 dark:text-navy-950",
  Kepanitiaan: "border border-navy-900/25 text-navy-900 dark:border-paper/25 dark:text-paper",
  Magang: "bg-navy-900 text-paper dark:bg-gold-500 dark:text-navy-950",
  "Proyek Akademik": "border border-navy-900/25 text-navy-900 dark:border-paper/25 dark:text-paper",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-navy-900/8 bg-navy-900/[0.025] py-20 dark:border-paper/8 dark:bg-paper/[0.02] sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="04 · Pengalaman"
          title="Organisasi & Kerelawanan"
          description="Pengalaman organisasi dan kerelawanan yang mengasah kemampuan administrasi keuangan, pelayanan, komunikasi, dan kerja sama tim."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <article className="h-full rounded-lg border border-navy-900/10 bg-paper p-6 dark:border-paper/10 dark:bg-navy-900">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-paper">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-700 dark:text-ink-300">{item.org}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wide ${typeStyles[item.type]}`}
                  >
                    {item.type}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="font-mono text-xs tabular text-gold-600 dark:text-gold-400">{item.period}</p>
                  {item.certificateLink && (
                    <a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-navy-800 underline decoration-dashed underline-offset-4 transition-colors hover:text-gold-600 dark:text-paper dark:hover:text-gold-400"
                    >
                      Lihat Piagam ↗
                    </a>
                  )}
                </div>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
