import express from 'express'

import { Product, Review } from '../../../models/index.js'

const productReviewsRouter = new express.Router({mergeParams: true})

productReviewsRouter.get('/', async (req, res) => {
  const productId = req.params.id

  try {
    const product = await Product.query().findById(productId)
    const reviews = await product.$relatedQuery('reviews')
    return res.status(200).json({reviews})
  } catch (error) {
    return res.status(500).json({errors: error})
  }
})
export default productReviewsRouter