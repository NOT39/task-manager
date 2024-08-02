import { NextFunction, Request, Response } from 'express'

export async function setHeaders(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )

  next()
}
