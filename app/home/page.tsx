import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getRecentTasks, getTasksByStatus } from "@/utils/data/tchinda-services"
import RecentTasksList from "./_components/recent-tasks-list"

export default async function HomePage() {
  const recentTasks = await getRecentTasks()
  const pendingTasks = await getTasksByStatus('Pending')
  const completedTasks = await getTasksByStatus('Completed')

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Tchinda</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Tasks</CardTitle>
            <CardDescription>All administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{recentTasks.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
            <CardDescription>Tasks awaiting processing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pendingTasks.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Tasks</CardTitle>
            <CardDescription>Successfully processed tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{completedTasks.length}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Tasks</CardTitle>
          <CardDescription>Latest administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentTasksList tasks={recentTasks} />
        </CardContent>
      </Card>
    </div>
  )
}