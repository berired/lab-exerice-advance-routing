'use client';

export default function TeamError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
      <div className="w-12 h-12 rounded-2xl bg-red-400/10 border border-red-400/20 flex items-center justify-center">
        <span className="text-red-400 text-lg">⚠</span>
      </div>

      <div>
        <p className="font-display font-bold text-zinc-100 tracking-wide text-sm">Connection Failed</p>
        <p className="text-[11px] text-zinc-600 mt-2 font-mono max-w-[220px] leading-relaxed">
          {error.message}
        </p>
      </div>

      <button
        onClick={reset}
        className="px-5 py-2 bg-lime-400 text-zinc-950 text-sm rounded-xl font-bold hover:bg-lime-300 transition-all active:scale-95"
      >
        Retry
      </button>

      <span className="text-[10px] text-zinc-700 font-mono">
        @team/error.tsx · reset() recovers
      </span>
    </div>
  );
}
