import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { PrismaTasksRepository } from '@/repositories/prisma-tasks-repository'

export async function editTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tasksRepository = new PrismaTasksRepository()

  const editTaskParamsSchema = z.object({
    taskId: z.string().uuid(),
  })

  const editTaskBodySchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    completed: z.boolean().optional(),
  })

  try {
    const { taskId } = editTaskParamsSchema.parse(req.params)
    const sessionId = req.cookies.sessionId

    const task = await tasksRepository.findById(taskId)

    if (!task) {
      return res.status(404).json({ message: 'Entity Not Found.' })
    }

    const isTaskOwner = task?.session_id === sessionId

    if (!isTaskOwner) {
      return res.status(401).json({ message: 'Unauthorized.' })
    }

    const data = editTaskBodySchema.parse(req.body)

    const updatedTask = await tasksRepository.update(taskId, data)

    return res.status(201).json(updatedTask)
  } catch (err) {
    next(err)
  }
}
