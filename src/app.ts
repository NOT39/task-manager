import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { tasks_routes } from './routes/tasks'
import { errorHandler } from './middlewares/error-handler'

export const app = express()

app.use(((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', req.headers.origin)

  const corsOptions = {
    origin: [req.headers.origin],
    optionsSuccessStatus: 200,
  }

  app.use(cors(corsOptions))

  next()
}))

app.use(express.json())

app.use(cookieParser())

app.use('/tasks', tasks_routes)

app.use(errorHandler)
