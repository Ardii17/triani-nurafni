import { tools } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Tools() {
  return (
    <section
      id="tools"
      className="border-t border-navy-900/8 bg-navy-900/[0.025] py-20 dark:border-paper/8 dark:bg-paper/[0.02] sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="08 · Tools"
          title="Software yang dikuasai"
          description="Aplikasi produktivitas dan software akuntansi dalam pekerjaan sehari-hari."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 50}>
              <div className="flex flex-col items-center gap-3 rounded-lg border border-navy-900/10 bg-paper px-4 py-6 text-center transition-transform hover:-translate-y-1 dark:border-paper/10 dark:bg-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-mono text-xs font-semibold text-paper dark:bg-gold-500 dark:text-navy-950">
                  {initials(tool.name)}
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-900 dark:text-paper">{tool.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-ink-500 dark:text-ink-300">{tool.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
