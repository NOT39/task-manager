import express from 'express'
import cookieParser from 'cookie-parser'

import { tasks_routes } from './routes/tasks'
import { errorHandler } from './middlewares/error-handler'

export const app = express()

app.use(express.json())

app.use(cookieParser())

app.use('/tasks', tasks_routes)

app.use(errorHandler)
