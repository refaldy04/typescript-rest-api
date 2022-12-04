import { Router, Request, Response, NextFunction } from 'express'

export const healthRouter: Router = Router()

healthRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.status(200).send({ status: 200, data: 'hello world' })
)
