// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { config } from 'dotenv'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'test', 'development']).default('production'),
  // DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️ Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
