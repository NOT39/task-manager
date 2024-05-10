import { randomUUID } from 'node:crypto'
import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { PrismaTasksRepository } from '@/repositories/prisma-tasks-repository'

export async function createTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tasksRepository = new PrismaTasksRepository()

  const createTaskBodySchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  })

  try {
    const { title, description } = createTaskBodySchema.parse(req.body)

    let sessionId = req.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      res.cookie('sessionId', sessionId, {
        // maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        // httpOnly: true,
        secure: true,
      })
    }

    const taskData = {
      title,
      description,
      completed: false,
      session_id: sessionId,
    }

    const task = await tasksRepository.create(taskData)

    return res.status(201).json(task)
  } catch (err) {
    next(err)
  }
}
