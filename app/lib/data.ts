export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  assignee: string;
  priority: 'low' | 'medium' | 'high';
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  tasksCount: number;
};

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Design System Setup',
    description: 'Create a comprehensive design system with tokens, components, and documentation for the entire product.',
    status: 'done',
    assignee: 'Alice Johnson',
    priority: 'high',
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Integrate the REST API endpoints for user authentication and real-time data fetching with proper error handling.',
    status: 'in-progress',
    assignee: 'Bob Smith',
    priority: 'high',
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Build the analytics dashboard with interactive charts, KPI cards, and metrics visualization using a charting library.',
    status: 'in-progress',
    assignee: 'Charlie Brown',
    priority: 'medium',
  },
  {
    id: '4',
    title: 'Mobile Responsive Layout',
    description: 'Ensure the application is fully responsive across all device sizes from 320px mobile to 4K desktop displays.',
    status: 'todo',
    assignee: 'Diana Prince',
    priority: 'medium',
  },
  {
    id: '5',
    title: 'Performance Optimization',
    description: 'Optimize bundle size using code splitting, implement lazy loading, and improve Core Web Vitals scores.',
    status: 'todo',
    assignee: 'Eve Adams',
    priority: 'low',
  },
  {
    id: '6',
    title: 'Testing Suite',
    description: 'Write comprehensive unit and integration tests to achieve and maintain 80% code coverage across the codebase.',
    status: 'todo',
    assignee: 'Frank Miller',
    priority: 'medium',
  },
];

export const teamMembers: TeamMember[] = [
  { id: '1', name: 'Alice Johnson', role: 'Lead Designer', initials: 'AJ', tasksCount: 3 },
  { id: '2', name: 'Bob Smith', role: 'Backend Engineer', initials: 'BS', tasksCount: 5 },
  { id: '3', name: 'Charlie Brown', role: 'Frontend Engineer', initials: 'CB', tasksCount: 4 },
  { id: '4', name: 'Diana Prince', role: 'UX Researcher', initials: 'DP', tasksCount: 2 },
  { id: '5', name: 'Eve Adams', role: 'DevOps Engineer', initials: 'EA', tasksCount: 3 },
];

export async function getAnalytics() {
  // Simulate a 3-second data fetching delay to demonstrate Suspense streaming
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    totalTasks: tasks.length,
    completed: tasks.filter((t) => t.status === 'done').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    todo: tasks.filter((t) => t.status === 'todo').length,
    completionRate: Math.round(
      (tasks.filter((t) => t.status === 'done').length / tasks.length) * 100
    ),
  };
}

export function getTaskById(id: string): Task | undefined {
  return tasks.find((t) => t.id === id);
}

// Alternates between failure and success so that reset() in error.tsx visibly recovers.
// First call throws; the second call (triggered by reset()) succeeds; then cycles again.
let teamShouldFail = true;

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (teamShouldFail) {
    teamShouldFail = false;
    throw new Error('Failed to load team members. Server returned 503 Service Unavailable.');
  }
  teamShouldFail = true;
  return teamMembers;
}
