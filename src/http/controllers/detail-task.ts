import { NextFunction, Request, Response } from 'express'
import { PrismaTasksRepository } from '@/repositories/prisma-tasks-repository'
import { z } from 'zod'

export async function detailTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tasksRepository = new PrismaTasksRepository()

  const datailTaskParamsSchema = z.object({
    taskId: z.string().uuid(),
  })

  try {
    const { taskId } = datailTaskParamsSchema.parse(req.params)

    const sessionId = req.cookies.sessionId

    const task = await tasksRepository.findById(taskId)

    if (!task) {
      return res.status(404).json({ message: 'Entity Not Found.' })
    }

    const isTaskOwner = task?.session_id === sessionId

    if (!isTaskOwner) {
      return res.status(401).json({ message: 'Unauthorized.' })
    }

    return res.status(200).json(task)
  } catch (err) {
    next(err)
  }
}
