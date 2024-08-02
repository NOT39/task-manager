import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { tasks_routes } from './routes/tasks'
import { errorHandler } from './middlewares/error-handler'
import { setHeaders } from './middlewares/set-headers'

export const app = express()

// const corsOptions = {
// origin: '*',
// optionsSuccessStatus: 200,
// }

// app.use(cors(corsOptions))

app.use(setHeaders)

app.use(express.json())

app.use(cookieParser())

app.use('/tasks', tasks_routes)

app.use(errorHandler)
