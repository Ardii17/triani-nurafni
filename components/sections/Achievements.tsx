import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const categoryColor: Record<string, string> = {
  Akademik: "text-navy-800 dark:text-paper/90",
  Kompetisi: "text-gold-600 dark:text-gold-400",
  Beasiswa: "text-balance-600 dark:text-balance-400",
  Organisasi: "text-ink-700 dark:text-ink-300",
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
              <span className="font-mono text-sm tabular text-ink-500 dark:text-ink-300">{item.year}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
