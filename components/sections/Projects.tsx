import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="05 · Proyek"
        title="Proyek & Studi Kasus"
        description="Proyek akademik dan praktik yang menjadi sarana menerapkan ilmu akuntansi, audit, perpajakan, software akuntansi, dan analisis data."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <article className="group flex h-full flex-col rounded-lg border border-navy-900/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg dark:border-paper/10 dark:bg-navy-900">
              <span className="font-mono text-[11px] text-ink-500 dark:text-ink-300">{project.id}</span>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900 dark:text-paper">
                {project.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-navy-900/6 px-2.5 py-1 font-mono text-[11px] text-navy-800 dark:bg-paper/8 dark:text-paper/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-4 border-t border-dashed border-navy-900/12 pt-3 dark:border-paper/15">
                <p className="text-xs leading-relaxed text-balance-600 dark:text-balance-400">
                  <span className="font-semibold">Insight:</span> {project.outcome}
                </p>
                {project.certificateLink && (
                  <div className="mt-2.5">
                    <a
                      href={project.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-navy-800 underline decoration-dashed underline-offset-4 transition-colors hover:text-gold-600 dark:text-paper dark:hover:text-gold-400"
                    >
                      Lihat Sertifikat Terkait ↗
                    </a>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
