import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const healthRouter: Router = Router()

healthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Health Check Success')
  res.status(200).send({ status: 200, data: 'hello world' })
})
