import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { tasks_routes } from './routes/tasks'
import { errorHandler } from './middlewares/error-handler'

export const app = express()

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use('/tasks', tasks_routes)

app.use(errorHandler)
