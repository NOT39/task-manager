import { Prisma, Task } from '@prisma/client'

export interface TasksRepository {
  listAll: () => Promise<Task[]>
  listBySessionId: (sessionId: string) => Promise<Task[]>

  findById: (taskId: string) => Promise<Task | null>

  create: (data: Prisma.TaskCreateInput) => Promise<Task>
  delete: (taskId: string, sessionId: string) => Promise<Task>
  update: (taskId: string, data: Prisma.TaskUpdateInput) => Promise<Task>
}
