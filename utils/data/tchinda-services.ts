"server only"

import { prisma } from '@/prisma/connection'

export async function getRecentTasks(limit = 5) {
  const tasks = await prisma.task.findMany({
    orderBy: { task_id: 'desc' },
    take: limit,
    include: {
      driver: true,
      tchinda: true,
    },
  })
  return tasks
}

export async function getTasksByStatus(status: string) {
  const tasks = await prisma.task.findMany({
    where: { status },
    include: {
      driver: true,
      tchinda: true,
    },
  })
  return tasks
}

export async function getTripsByUser(userId: string, userType: 'driver' | 'tchinda') {
  const trips = await prisma.trip.findMany({
    where: userType === 'driver' ? { driver_id: userId } : { tchinda_id: userId },
    include: {
      driver: true,
      tchinda: true,
      task: true,
    },
    orderBy: { trip_date: 'desc' },
  })
  return trips
}