import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { tasks_routes } from './routes/tasks'
import { errorHandler } from './middlewares/error-handler'

export const app = express()

const corsOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  origin: (origin: any, callback: any) => callback(null, true),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/tasks', tasks_routes)

app.use(errorHandler)
