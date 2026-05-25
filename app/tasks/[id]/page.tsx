import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTaskById } from '../../lib/data';

const priorityConfig = {
  high:   { badge: 'text-red-400 bg-red-400/10 border-red-400/20',     bar: 'bg-red-500' },
  medium: { badge: 'text-orange-400 bg-orange-400/10 border-orange-400/20', bar: 'bg-orange-400' },
  low:    { badge: 'text-zinc-500 bg-zinc-600/20 border-zinc-600/30',  bar: 'bg-zinc-600' },
} as const;

const statusConfig = {
  done:          { badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', dot: 'bg-emerald-400' },
  'in-progress': { badge: 'text-sky-400 bg-sky-400/10 border-sky-400/20',             dot: 'bg-sky-400' },
  todo:          { badge: 'text-zinc-500 bg-zinc-600/20 border-zinc-600/30',          dot: 'bg-zinc-500' },
} as const;

// Next.js 15: params is a Promise — must be awaited in Server Components
export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = getTaskById(id);

  // Trigger the not-found.tsx boundary for invalid IDs
  if (!task) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center gap-2 text-sm font-mono">
          <Link href="/tasks" className="text-zinc-500 hover:text-zinc-100 transition-colors">
            ← tasks
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-500">#{id}</span>
          <div className="ml-auto">
            <Link href="/" className="font-display font-black text-white tracking-tighter not-italic">
              TASK<span className="text-lime-400">FLOW</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* Priority accent bar */}
        <div className={`h-0.5 w-full rounded-full mb-8 opacity-50 ${priorityConfig[task.priority].bar}`} />

        {/* Badges */}
        <div className="flex gap-2 mb-5">
          <span className={`text-xs px-2.5 py-1 rounded border font-mono flex items-center gap-1.5 ${statusConfig[task.status].badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[task.status].dot}`} />
            {task.status}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded border font-mono ${priorityConfig[task.priority].badge}`}>
            {task.priority} priority
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-3xl text-white tracking-tight leading-tight mb-4">
          {task.title}
        </h1>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed text-sm mb-10">{task.description}</p>

        {/* Assignee */}
        <div className="border-t border-zinc-800 pt-6 mb-8">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.18em] mb-3">Assignee</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center font-display font-bold text-lime-400 text-sm">
              {task.assignee.split(' ').map((n) => n[0]).join('')}
            </div>
            <span className="font-medium text-zinc-100">{task.assignee}</span>
          </div>
        </div>

        {/* Footer meta */}
        <div className="border-t border-zinc-800 pt-5">
          <p className="text-[10px] text-zinc-700 font-mono">
            tasks/[id]/page.tsx · full-page view · id: {task.id}
          </p>
        </div>
      </main>
    </div>
  );
}
