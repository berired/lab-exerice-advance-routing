import Link from 'next/link';
import { tasks } from '../lib/data';

const statusConfig = {
  done:        { badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' },
  'in-progress': { badge: 'bg-sky-400/10 text-sky-400 border-sky-400/20' },
  todo:        { badge: 'bg-zinc-600/30 text-zinc-500 border-zinc-600/30' },
} as const;

export default function DashboardPage() {
  const todo = tasks.filter((t) => t.status === 'todo').length;
  const inProgress = tasks.filter((t) => t.status === 'in-progress').length;
  const done = tasks.filter((t) => t.status === 'done').length;

  return (
    <div className="space-y-5">
      {/* KPI strip */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'TO DO',       value: todo,       color: 'text-zinc-300',  sub: 'queued' },
          { label: 'IN PROGRESS', value: inProgress, color: 'text-sky-400',   sub: 'active' },
          { label: 'COMPLETED',   value: done,       color: 'text-lime-400',  sub: 'done' },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-600 transition-colors group"
          >
            <p className="text-[10px] font-mono text-zinc-600 tracking-[0.18em] mb-2">{s.label}</p>
            <p className={`text-4xl font-display font-black leading-none ${s.color}`}>{s.value}</p>
            <p className="text-[10px] font-mono text-zinc-700 mt-2">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent tasks */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <h2 className="font-display font-bold text-white tracking-wide">Recent Tasks</h2>
          <Link
            href="/tasks"
            className="text-xs font-mono text-lime-400 hover:text-lime-300 transition-colors"
          >
            view all →
          </Link>
        </div>
        <div className="divide-y divide-zinc-800/60">
          {tasks.slice(0, 3).map((task) => (
            <Link
              key={task.id}
              href={`/tasks/${task.id}`}
              className="flex items-center gap-4 px-5 py-4 hover:bg-zinc-800/50 transition-colors group"
            >
              <span className="text-xs font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0 w-5">
                #{task.id}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-zinc-100 text-sm leading-none group-hover:text-white transition-colors">
                  {task.title}
                </p>
                <p className="text-xs text-zinc-600 mt-1 font-mono">{task.assignee}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded border font-mono shrink-0 ${statusConfig[task.status].badge}`}>
                {task.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
