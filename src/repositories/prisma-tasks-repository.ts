import { Prisma } from '@prisma/client'
import { TasksRepository } from './tasks-repository'
import { prisma } from '@/lib/prisma'

export class PrismaTasksRepository implements TasksRepository {
  async create(data: Prisma.TaskCreateInput) {
    const task = await prisma.task.create({ data })

    return task
  }

  async delete(taskId: string) {
    console.log(taskId)

    const task = await prisma.task.delete({
      where: {
        id: taskId,
      },
    })

    return task
  }

  async update(taskId: string, data: Prisma.TaskUpdateInput) {
    const task = prisma.task.update({
      where: {
        id: taskId,
      },
      data,
    })

    return task
  }

  async findById(taskId: string) {
    const task = prisma.task.findUnique({
      where: {
        id: taskId,
      },
    })

    return task
  }

  async listAll() {
    const tasks = prisma.task.findMany()

    return tasks
  }

  async listBySessionId(sessionId: string) {
    const tasks = prisma.task.findMany({
      where: {
        session_id: sessionId,
      },
    })

    return tasks
  }
}
