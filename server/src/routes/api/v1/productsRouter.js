import express from 'express'
import productReviewsRouter from './productReviewsRouter.js'

import { Product } from '../../../models/index.js'
import ProductSerializer from '../../../serializers/ProductSerializer.js'

const productsRouter = new express.Router()

productsRouter.use('/:productId/reviews', productReviewsRouter)

productsRouter.get('/:id', async (req, res) => {
  const id = req.params.id 
  const userId = req.query.userId
  try {
    const product = await Product.query().findById(id)
    const serializedProduct = await ProductSerializer.getDetails(product, userId)
    return res.status(200).json({ product: serializedProduct })
  } catch (errors) {
    return res.status(500).json({ errors })
  }
})

export default productsRouter
