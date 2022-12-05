import { logger } from '../utils/logger'
import productModel from '../models/product.model'

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => data)
    .catch((err) => {
      logger.info('Cannot get data from db')
      logger.error(err)
    })
}
