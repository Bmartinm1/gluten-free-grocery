import express from 'express'
import cleanUserInput from '../../../services/cleanUserInput.js'
import { ValidationError } from 'objection'
import ReviewSerializer from '../../../serializers/ReviewSerializer.js'
import { Review } from '../../../models/index.js'
import ProductSerializer from "../../../serializers/ProductSerializer.js"

const reviewsRouter = new express.Router()

reviewsRouter.delete('/:id', async (req, res) => {
  try {
    const review = await Review.query().findById(req.params.id)
    const product = await review.$relatedQuery("product")
    await Review.query().deleteById(req.params.id)
    const serializedProduct = await ProductSerializer.getDetails(product)
    return res.status(200).json({ reviews: serializedProduct.reviews })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ error: error })
  }
})

export default reviewsRouter
