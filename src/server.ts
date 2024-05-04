import { app } from './app'
import { env } from './env'

app.listen(env.PORT, () => {
  console.log(`Server listening on port: ${env.PORT}`)
})
