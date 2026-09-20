import { certifications } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-navy-900/8 bg-navy-900/[0.025] py-20 dark:border-paper/8 dark:bg-paper/[0.02] sm:py-24"
    >
      <div className="container-page">
        <SectionHeading eyebrow="06 · Sertifikasi" title="Sertifikasi profesional" />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 70}>
              <div className="flex items-center justify-between gap-4 rounded-lg border border-navy-900/10 bg-paper p-5 dark:border-paper/10 dark:bg-navy-900">
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900 dark:text-paper">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-700 dark:text-ink-300">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs tabular text-gold-600 dark:text-gold-400">{cert.year}</p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    className="shrink-0 rounded-full border border-navy-900/20 px-4 py-2 font-mono text-[11px] text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-paper/20 dark:text-paper dark:hover:border-gold-400 dark:hover:text-gold-400"
                  >
                    Lihat
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
