'use client'

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Task } from "@prisma/client"

export default function RecentTasksList({ tasks }: { tasks: Task[] }) {
  const { toast } = useToast()

  const handleViewTask = (taskId: string) => {
    toast({
      title: "Task Details",
      description: `Viewing details for task ${taskId}`,
    })
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.task_id} className="flex items-center justify-between">
          <span>Task {task.task_id} - {task.status}</span>
          <Button onClick={() => handleViewTask(task.task_id)}>View Details</Button>
        </li>
      ))}
    </ul>
  )
}