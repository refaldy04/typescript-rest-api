import { Router, Request, Response, NextFunction } from 'express'

export const productRouter: Router = Router()

productRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] })
)
