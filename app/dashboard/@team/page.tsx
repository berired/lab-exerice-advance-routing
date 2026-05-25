import { getTeamMembers } from '../../lib/data';

const avatarPalette = [
  'bg-lime-400/15 text-lime-400 border-lime-400/20',
  'bg-sky-400/15 text-sky-400 border-sky-400/20',
  'bg-violet-400/15 text-violet-400 border-violet-400/20',
  'bg-orange-400/15 text-orange-400 border-orange-400/20',
  'bg-pink-400/15 text-pink-400 border-pink-400/20',
];

export default async function TeamPage() {
  // Alternates: first render throws (triggering error.tsx), reset() retries and succeeds
  const members = await getTeamMembers();

  return (
    <div className="space-y-1">
      {members.map((member, i) => (
        <div
          key={member.id}
          className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-zinc-800/60 transition-colors group"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-xs shrink-0 border ${avatarPalette[i % avatarPalette.length]}`}
          >
            {member.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-100 leading-none">{member.name}</p>
            <p className="text-xs text-zinc-600 mt-0.5 font-mono">{member.role}</p>
          </div>
          <span className="text-xs font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0">
            {member.tasksCount}t
          </span>
        </div>
      ))}
    </div>
  );
}
