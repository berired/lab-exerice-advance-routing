'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Task } from '../lib/data';

const priorityBadge: Record<Task['priority'], string> = {
  high:   'text-red-400 bg-red-400/10 border-red-400/20',
  medium: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  low:    'text-zinc-500 bg-zinc-600/20 border-zinc-600/30',
};

const statusBadge: Record<Task['status'], string> = {
  done:          'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'in-progress': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  todo:          'text-zinc-500 bg-zinc-600/20 border-zinc-600/30',
};

const statusDot: Record<Task['status'], string> = {
  done:          'bg-emerald-400',
  'in-progress': 'bg-sky-400',
  todo:          'bg-zinc-500',
};

export default function TaskModal({ task }: { task: Task }) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => router.back()}
    >
      {/* Blurred dark backdrop */}
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" />

      {/* Modal card */}
      <div
        className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex gap-1.5">
            <span className={`text-[10px] px-2 py-0.5 rounded border font-mono flex items-center gap-1 ${statusBadge[task.status]}`}>
              <span className={`w-1 h-1 rounded-full ${statusDot[task.status]}`} />
              {task.status}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${priorityBadge[task.priority]}`}>
              {task.priority}
            </span>
          </div>
          <button
            onClick={() => router.back()}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-colors text-sm"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* ID + Title */}
        <span className="text-[10px] font-mono text-zinc-700">#{task.id}</span>
        <h2 className="font-display font-black text-xl text-white tracking-tight leading-tight mt-0.5 mb-3">
          {task.title}
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{task.description}</p>

        {/* Assignee */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center font-display font-bold text-lime-400 text-[10px]">
            {task.assignee.split(' ').map((n) => n[0]).join('')}
          </div>
          <span className="text-sm text-zinc-400 font-mono">{task.assignee}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/tasks/${task.id}`}
            className="flex-1 text-center bg-lime-400 text-zinc-950 text-sm py-2.5 rounded-xl font-bold hover:bg-lime-300 transition-all active:scale-95"
          >
            View Full Page
          </Link>
          <button
            onClick={() => router.back()}
            className="flex-1 bg-zinc-800 text-zinc-300 text-sm py-2.5 rounded-xl font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
          >
            Close
          </button>
        </div>

        <p className="text-[10px] text-center text-zinc-700 font-mono mt-3">
          intercepted · @modal/(.)[id] · hard-refresh for full page
        </p>
      </div>
    </div>
  );
}
