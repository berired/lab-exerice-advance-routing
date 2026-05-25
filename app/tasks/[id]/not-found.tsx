import Link from 'next/link';

export default function TaskNotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 p-8 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #a3e635 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Red glow for error state */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center">
        <p className="font-display font-black leading-none text-zinc-800 select-none"
           style={{ fontSize: 'clamp(6rem, 20vw, 12rem)' }}>
          404
        </p>
        <h1 className="font-display font-bold text-xl text-white -mt-4 mb-3">Task Not Found</h1>
        <p className="text-zinc-600 text-sm max-w-xs font-mono leading-relaxed">
          No task matches this ID. It may have been deleted, or was never valid.
        </p>
      </div>

      <div className="relative z-10 flex gap-3">
        <Link
          href="/tasks"
          className="bg-lime-400 text-zinc-950 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-lime-300 transition-all active:scale-95"
        >
          ← Back to Tasks
        </Link>
        <Link
          href="/dashboard"
          className="bg-zinc-900 text-zinc-100 border border-zinc-700 px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-800 transition-colors"
        >
          Dashboard
        </Link>
      </div>

      <p className="relative z-10 text-[10px] text-zinc-700 font-mono">
        notFound() · tasks/[id]/not-found.tsx
      </p>
    </div>
  );
}
