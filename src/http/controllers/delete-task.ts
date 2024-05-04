import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { PrismaTasksRepository } from '@/repositories/prisma-tasks-repository'

export async function deleteTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tasksRepository = new PrismaTasksRepository()

  const deleteTaskParamsSchema = z.object({
    taskId: z.string().uuid(),
  })

  try {
    const { taskId } = deleteTaskParamsSchema.parse(req.params)

    const sessionId = req.cookies.sessionId

    const task = await tasksRepository.findById(taskId)

    if (!task) {
      return res.status(404).json({ message: 'Entity Not Found.' })
    }

    const isTaskOwner = task?.session_id === sessionId

    if (!isTaskOwner) {
      return res.status(401).json({
        message: 'Unauthorized.',
      })
    }

    await tasksRepository.delete(taskId)

    return res.status(200).send()
  } catch (err) {
    next(err)
  }
}
