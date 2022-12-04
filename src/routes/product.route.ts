import { Router, Request, Response, NextFunction } from 'express'
import { createProductValidation } from '../validation/product.validation'
import { logger } from '../utils/logger'

export const productRouter: Router = Router()

productRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Succes Get Product Data')
  return res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] })
})

productRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  logger.info('Succes Post New Product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add Product Success', data: value })
})
