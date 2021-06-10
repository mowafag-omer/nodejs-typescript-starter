import express from 'express'
import cors from 'cors'
import { v1Router } from './router'
import { API_BASE_URL } from '../../constant'

export const createServer = async (): Promise<express.Application> => {

  const app: express.Application = express()
  
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(`${API_BASE_URL}`, v1Router)

  app.listen(4000, () => {
      console.log(`[App]: Listening on PORT ${4000}`)
  })

  return app
}