import { Request, Response, NextFunction } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import { getProductFromDB } from '../sevices/product.service'

interface ProductType {
  product_id: String
  name: String
  price: Number
  size: String
}

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  const products: any = await getProductFromDB()
  const {
    params: { name }
  } = req

  if (name) {
    const filterProduct = products.filter((product: ProductType) => {
      if (product.name === name) {
        return product
      }
    })
    if (filterProduct.length < 1) {
      logger.info('Data Not Found')
      return res.status(404).send({ status: false, statusCode: 404, data: {} })
    }
    logger.info('Succes Get Product Data')
    return res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] })
  }

  logger.info('Succes Get Product Data')
  return res.status(200).send({ status: true, statusCode: 200, data: products })
}

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  logger.info('Succes Post New Product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add Product Success', data: value })
}
