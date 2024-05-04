import { env } from '@/env'
import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

export async function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  if (err instanceof ZodError) {
    return res.status(422).json({
      message: 'Validation error.',
      issues: err.format(),
    })
  }

  // if (env.NODE_ENV !== 'production') console.error(err)
  console.error(err)

  return res.status(500).json({
    message: 'Internal Server Error.',
  })
}
