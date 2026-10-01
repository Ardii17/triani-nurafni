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
        <SectionHeading
          eyebrow="06 · Sertifikasi"
          title="Sertifikasi & Uji Kompetensi"
          description="Sertifikasi dan kompetensi yang mendukung kemampuan di bidang akuntansi, perpajakan, audit, dan pengelolaan keuangan."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 70}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-navy-900/10 bg-paper p-5 dark:border-paper/10 dark:bg-navy-900">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-navy-900 dark:text-paper">
                      {cert.name}
                    </h3>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-navy-900/20 px-3 py-1 font-mono text-[11px] text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-paper/20 dark:text-paper dark:hover:border-gold-400 dark:hover:text-gold-400"
                      >
                        Lihat Dokumen ↗
                      </a>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink-700 dark:text-ink-300">{cert.issuer}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs tabular text-gold-600 dark:text-gold-400">{cert.year}</span>
                    {cert.certNumber && (
                      <span className="font-mono text-[11px] text-ink-500 dark:text-ink-400">
                        • {cert.certNumber}
                      </span>
                    )}
                  </div>

                  {cert.points && cert.points.length > 0 && (
                    <ul className="mt-3 space-y-1.5 border-t border-dashed border-navy-900/10 pt-3 dark:border-paper/10">
                      {cert.points.map((pt, idx) => (
                        <li key={idx} className="flex gap-2 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
