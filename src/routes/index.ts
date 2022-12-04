import { Application, Router } from 'express'
import { healthRouter } from './health'
import { productRouter } from './product'

const _routes: Array<[string, Router]> = [
  ['/health', healthRouter],
  ['/product', productRouter]
]

export const routes = (app: Application) =>
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
