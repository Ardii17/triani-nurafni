export default function BalancedSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex select-none items-center gap-2 rounded-full border border-gold-500/60 bg-gold-500/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-gold-600 dark:text-gold-300 -rotate-2 ${className}`}
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-balance-500" />
      DR = CR &nbsp;·&nbsp; BALANCED
    </div>
  );
}
