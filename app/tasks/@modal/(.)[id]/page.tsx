import { notFound } from 'next/navigation';
import { getTaskById } from '../../../lib/data';
import TaskModal from '../../../components/TaskModal';

// Next.js 15: params is a Promise — must be awaited in Server Components
export default async function InterceptedTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = getTaskById(id);

  if (!task) notFound();

  return <TaskModal task={task} />;
}
