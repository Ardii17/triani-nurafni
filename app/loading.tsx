export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper dark:bg-navy-950">
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-gold-600 dark:text-gold-400">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500" />
        MEMUAT
      </div>
    </div>
  );
}
