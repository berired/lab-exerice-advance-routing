import { getAnalytics } from '../../lib/data';

const stats = (a: Awaited<ReturnType<typeof getAnalytics>>) => [
  { label: 'TOTAL',    value: a.totalTasks,  color: 'text-zinc-100' },
  { label: 'DONE',     value: a.completed,   color: 'text-lime-400' },
  { label: 'ACTIVE',   value: a.inProgress,  color: 'text-sky-400' },
  { label: 'QUEUED',   value: a.todo,        color: 'text-zinc-500' },
];

export default async function AnalyticsPage() {
  // Awaits the 3-second simulated delay — loading.tsx skeleton renders meanwhile
  const analytics = await getAnalytics();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {stats(analytics).map((s) => (
          <div
            key={s.label}
            className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-3"
          >
            <p className="text-[10px] font-mono text-zinc-600 tracking-[0.15em]">{s.label}</p>
            <p className={`text-2xl font-display font-black mt-0.5 leading-none ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-zinc-600 tracking-[0.15em]">COMPLETION</span>
          <span className="text-xs font-mono text-lime-400 font-bold">{analytics.completionRate}%</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-lime-400 h-full rounded-full transition-all"
            style={{ width: `${analytics.completionRate}%` }}
          />
        </div>
      </div>

      <p className="text-[10px] text-zinc-700 font-mono text-center">
        streamed · 3s delay · @analytics/loading.tsx
      </p>
    </div>
  );
}
