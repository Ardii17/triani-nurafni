import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-navy-900/8 bg-navy-900/[0.025] py-20 dark:border-paper/8 dark:bg-paper/[0.02] sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="02 · Keahlian"
          title="Kompetensi inti di bidang akuntansi & keuangan"
          description="Kompetensi akuntansi, perpajakan, audit, serta software akuntansi dan analisis data."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <div className="h-full rounded-lg border border-navy-900/10 bg-paper p-5 transition-shadow hover:shadow-md dark:border-paper/10 dark:bg-navy-900">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-base font-medium text-navy-900 dark:text-paper">
                    {skill.name}
                  </h3>
                  <span className="tabular font-mono text-xs text-gold-600 dark:text-gold-400">
                    {skill.level}%
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-300">{skill.note}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-navy-900/8 dark:bg-paper/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-navy-700 to-gold-500 dark:from-gold-400 dark:to-gold-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
