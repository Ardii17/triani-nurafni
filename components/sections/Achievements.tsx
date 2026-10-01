import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const categoryColor: Record<string, string> = {
  Akademik: "text-navy-800 dark:text-paper/90",
  Kompetisi: "text-gold-600 dark:text-gold-400",
  Beasiswa: "text-balance-600 dark:text-balance-400",
  Organisasi: "text-ink-700 dark:text-ink-300",
  Penghargaan: "text-gold-600 dark:text-gold-400",
};

export default function Achievements() {
  return (
    <section id="achievements" className="container-page py-20 sm:py-24">
      <SectionHeading eyebrow="07 · Pencapaian" title="Prestasi akademik & organisasi" />

      <div className="divide-y divide-navy-900/10 border-y border-navy-900/10 dark:divide-paper/10 dark:border-paper/10">
        {achievements.map((item, i) => (
          <Reveal key={item.id} delay={i * 60}>
            <div className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <span className={`font-mono text-[11px] uppercase tracking-[0.14em] ${categoryColor[item.category]}`}>
                  {item.category}
                </span>
                <h3 className="mt-1 font-display text-base font-medium text-navy-900 dark:text-paper">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 dark:text-ink-300">{item.issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm tabular text-ink-500 dark:text-ink-300">{item.year}</span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-navy-900/20 px-3 py-1 font-mono text-[11px] text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-paper/20 dark:text-paper dark:hover:border-gold-400 dark:hover:text-gold-400"
                  >
                    Lihat
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
