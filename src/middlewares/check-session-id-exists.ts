import { NextFunction, Request, Response } from 'express'

export async function checkSessionIdExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { sessionId } = req.body

  if (!sessionId) {
    return res.status(401).json({ message: 'Unauthorized.' })
  }

  next()
}
