'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Task } from "@prisma/client"

export default function TasksList({ tasks }: { tasks: Task[] }) {
  const { toast } = useToast()

  const handleViewTask = (taskId: string) => {
    toast({
      title: "Task Details",
      description: `Viewing details for task ${taskId}`,
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <Card key={task.task_id}>
          <CardHeader>
            <CardTitle>Task {task.task_id}</CardTitle>
            <CardDescription>Status: {task.status}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Price: {task.price} XAF</p>
            <Button onClick={() => handleViewTask(task.task_id)} className="w-full mt-4">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}