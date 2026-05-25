import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dot-grid background texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(163,230,53,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-lime-400/8 rounded-full blur-3xl pointer-events-none" />
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center max-w-lg">
        {/* Label */}
        <div className="flex items-center gap-2 text-lime-400/70 text-xs font-mono tracking-[0.25em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          Next.js 15 · Advanced Routing Patterns
        </div>

        {/* Wordmark */}
        <div>
          <h1 className="font-display font-black text-7xl sm:text-8xl text-white tracking-tighter leading-none">
            TASK<span className="text-lime-400">FLOW</span>
          </h1>
          <p className="text-zinc-500 text-base mt-4 leading-relaxed">
            Parallel slots · intercepted modals · streaming suspense —<br className="hidden sm:block" />
            all wired together in one dashboard.
          </p>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <Link
            href="/dashboard"
            className="group flex flex-col items-center gap-1.5 bg-lime-400 text-zinc-950 px-5 py-5 rounded-2xl font-bold transition-all hover:bg-lime-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-2xl leading-none">◈</span>
            <span className="font-display font-bold tracking-wide text-sm">Dashboard</span>
            <span className="text-xs font-mono text-zinc-700">parallel slots</span>
          </Link>
          <Link
            href="/tasks"
            className="group flex flex-col items-center gap-1.5 bg-zinc-900 text-white border border-zinc-700 px-5 py-5 rounded-2xl font-bold transition-all hover:border-lime-400/40 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-2xl leading-none">⊡</span>
            <span className="font-display font-bold tracking-wide text-sm">Tasks</span>
            <span className="text-xs font-mono text-zinc-600">intercepting routes</span>
          </Link>
        </div>

        {/* Feature list */}
        <div className="text-[11px] text-zinc-700 font-mono tracking-wide space-y-1">
          <div>@team slot · @analytics slot · Suspense streaming</div>
          <div>error.tsx boundaries · not-found.tsx · async params</div>
        </div>
      </div>
    </div>
  );
}
