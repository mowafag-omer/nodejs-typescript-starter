import { Router, Request, Response } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_: Request, res: Response) => {
  res.status(200).json('hello');
})

export { v1Router }