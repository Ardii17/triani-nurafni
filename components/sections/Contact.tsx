import { profile } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

const contactRows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Telepon", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
  { label: "Lokasi", value: profile.location },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-navy-900/8 bg-navy-900/[0.025] py-20 dark:border-paper/8 dark:bg-paper/[0.02] sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="09 · Kontak"
          title="Mari terhubung"
          description="Terbuka untuk diskusi peluang kerja, magang, maupun kolaborasi profesional di bidang akuntansi dan keuangan."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <dl className="space-y-4">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between border-b border-dashed border-navy-900/12 pb-3 dark:border-paper/15"
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-ink-300">
                    {row.label}
                  </dt>
                  <dd>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-sm font-medium text-navy-900 transition-colors hover:text-gold-600 dark:text-paper dark:hover:text-gold-400"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-navy-900 dark:text-paper">{row.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block rounded-full bg-navy-900 px-6 py-3 font-mono text-[13px] tracking-wide text-paper transition-colors hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400"
            >
              Let&rsquo;s Connect
            </a>
          </div>

          <div className="rounded-lg border border-navy-900/10 bg-paper p-6 dark:border-paper/10 dark:bg-navy-900">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
