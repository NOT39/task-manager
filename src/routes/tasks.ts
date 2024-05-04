import { createTask } from '@/http/controllers/create-task'
import { deleteTask } from '@/http/controllers/delete-task'
import { detailTask } from '@/http/controllers/detail-task'
import { editTask } from '@/http/controllers/edit-task'
import { listTasks } from '@/http/controllers/list-tasks'
import { checkSessionIdExists } from '@/middlewares/check-session-id-exists'
import { Router } from 'express'

export const tasks_routes = Router({})

// Public Routes
tasks_routes.post('/', createTask)

// Restricted Routes
tasks_routes.use(checkSessionIdExists)

tasks_routes.get('/', listTasks)
tasks_routes.get('/:taskId', detailTask)
tasks_routes.delete('/:taskId', deleteTask)
tasks_routes.put('/:taskId', editTask)
