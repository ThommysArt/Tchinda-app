import { getTasksByStatus } from "@/utils/data/tchinda-services"
import TasksList from "./_components/tasks-list"

export default async function TasksPage() {
  const pendingTasks = await getTasksByStatus('Pending')
  const completedTasks = await getTasksByStatus('Completed')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tasks</h1>
      <h2 className="text-2xl font-semibold">Pending Tasks</h2>
      <TasksList tasks={pendingTasks} />
      <h2 className="text-2xl font-semibold mt-8">Completed Tasks</h2>
      <TasksList tasks={completedTasks} />
    </div>
  )
}