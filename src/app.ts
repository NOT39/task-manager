import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { tasks_routes } from './routes/tasks'
import { errorHandler } from './middlewares/error-handler'

export const app = express()

const corsOptions = {
  origin: ['http://localhost:5500', 'http://localhost:5500'],
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/tasks', tasks_routes)

app.use(errorHandler)
