import Link from 'next/link';
import { tasks } from '../lib/data';

const priorityBar = {
  high:   'bg-red-500',
  medium: 'bg-orange-400',
  low:    'bg-zinc-600',
} as const;

const priorityBadge = {
  high:   'text-red-400 bg-red-400/10 border-red-400/20',
  medium: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  low:    'text-zinc-500 bg-zinc-600/20 border-zinc-600/30',
} as const;

const statusBadge = {
  done:          'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'in-progress': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  todo:          'text-zinc-500 bg-zinc-600/20 border-zinc-600/30',
} as const;

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-display font-black text-white tracking-tighter text-lg">
              TASK<span className="text-lime-400">FLOW</span>
            </Link>
            <span className="text-[10px] text-zinc-600 font-mono border border-zinc-800 rounded px-1.5 py-0.5 leading-none hidden sm:block">
              tasks
            </span>
          </div>
          <nav className="flex items-center gap-1">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-lg text-sm text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/tasks"
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-lime-400/10 text-lime-400"
            >
              Tasks
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="font-display font-black text-3xl text-white tracking-tight">All Tasks</h1>
          <p className="text-zinc-600 text-xs mt-1.5 font-mono">
            click to preview in modal · hard-refresh task URL for full-page view
          </p>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <Link
              key={task.id}
              href={`/tasks/${task.id}`}
              className="group flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 hover:border-zinc-600 hover:bg-zinc-800/70 transition-all"
            >
              {/* Priority side-bar */}
              <div className={`w-0.5 h-10 rounded-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity ${priorityBar[task.priority]}`} />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    #{task.id}
                  </span>
                  <p className="font-semibold text-zinc-100 text-sm leading-none group-hover:text-white transition-colors">
                    {task.title}
                  </p>
                </div>
                <p className="text-xs text-zinc-600 mt-1.5 truncate leading-none">{task.description}</p>
                <p className="text-[10px] font-mono text-zinc-700 mt-1">{task.assignee}</p>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${priorityBadge[task.priority]}`}>
                  {task.priority}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${statusBadge[task.status]}`}>
                  {task.status}
                </span>
                <span className="text-zinc-700 group-hover:text-zinc-400 transition-colors ml-1 text-xs">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="text-[11px] text-zinc-700 font-mono">
            try{' '}
            <Link
              href="/tasks/999"
              className="text-lime-400/50 hover:text-lime-400 transition-colors underline underline-offset-2"
            >
              /tasks/999
            </Link>
            {' '}to trigger not-found.tsx
          </span>
        </div>
      </main>
    </div>
  );
}
