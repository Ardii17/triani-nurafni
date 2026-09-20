import { about, profile } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-page py-20 sm:py-24">
      <SectionHeading eyebrow="01 · Tentang Saya" title="Profil profesional yang teliti dengan angka" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-ink-700 dark:text-ink-300">
              {p}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-2">
            {about.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-navy-900/12 px-3.5 py-1.5 font-mono text-[12px] text-ink-700 dark:border-paper/15 dark:text-ink-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-navy-900/10 bg-navy-900/[0.03] p-6 dark:border-paper/10 dark:bg-paper/[0.03]">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
            Ringkasan Cepat
          </p>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500 dark:text-ink-300">Gelar</dt>
              <dd className="text-right font-medium text-navy-900 dark:text-paper">{profile.fullDegree}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500 dark:text-ink-300">Lokasi</dt>
              <dd className="text-right font-medium text-navy-900 dark:text-paper">{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-500 dark:text-ink-300">Status</dt>
              <dd className="text-right font-medium text-balance-600 dark:text-balance-400">
                {profile.availability}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
