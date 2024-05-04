import { NextFunction, Request, Response } from 'express'
import { PrismaTasksRepository } from '@/repositories/prisma-tasks-repository'

export async function listTasks(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const tasksRepository = new PrismaTasksRepository()

  const sessionId = req.cookies.sessionId

  try {
    const tasks = await tasksRepository.listBySessionId(sessionId)

    return res.status(200).json(tasks)
  } catch (err) {
    next(err)
  }
}
