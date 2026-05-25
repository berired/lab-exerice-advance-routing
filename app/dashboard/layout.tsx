import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function DashboardLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Sticky top nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-lime-400" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <Link href="/" className="font-display font-black text-white tracking-tighter text-lg">
              TASK<span className="text-lime-400">FLOW</span>
            </Link>
            <span className="hidden sm:block text-[10px] text-zinc-600 font-mono border border-zinc-800 rounded px-1.5 py-0.5 leading-none">
              dashboard
            </span>
          </div>
          <nav className="flex items-center gap-1">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-lime-400/10 text-lime-400"
            >
              Dashboard
            </Link>
            <Link
              href="/tasks"
              className="px-3 py-1.5 rounded-lg text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            >
              Tasks
            </Link>
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-5">
        {/* Dashboard page content */}
        {children}

        {/* Parallel slots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* @team slot */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-white tracking-wide">Team</h2>
              <span className="text-[10px] text-zinc-600 font-mono bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">
                @team slot
              </span>
            </div>
            {team}
          </div>

          {/* @analytics slot */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-white tracking-wide">Analytics</h2>
              <span className="text-[10px] text-zinc-600 font-mono bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">
                @analytics · 3s delay
              </span>
            </div>
            {analytics}
          </div>
        </div>
      </main>
    </div>
  );
}
