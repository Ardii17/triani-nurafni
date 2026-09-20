type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-700 dark:text-ink-300 leading-relaxed">{description}</p>
      )}
      <div className={`mt-5 h-px w-16 bg-gold-500 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
