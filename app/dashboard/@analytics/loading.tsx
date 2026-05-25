export default function AnalyticsLoading() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-3">
            <div
              className="skeleton h-2.5 w-12 rounded mb-2"
              style={{ animationDelay: `${i * 80}ms` }}
            />
            <div
              className="skeleton h-7 w-8 rounded"
              style={{ animationDelay: `${i * 80 + 40}ms` }}
            />
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between">
          <div className="skeleton h-2.5 w-20 rounded" />
          <div className="skeleton h-2.5 w-8 rounded" />
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
          <div className="skeleton h-full w-full" />
        </div>
      </div>

      <p className="text-[10px] text-zinc-700 font-mono text-center">
        streaming analytics… (3s simulated delay)
      </p>
    </div>
  );
}
