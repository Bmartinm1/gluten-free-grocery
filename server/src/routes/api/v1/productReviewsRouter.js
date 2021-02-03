import express from 'express'
import cleanUserInput from '../../../services/cleanUserInput.js'
import { ValidationError } from 'objection'
import ReviewSerializer from '../../../serializers/ReviewSerializer.js'
import { Product, Review } from '../../../models/index.js'

const productReviewsRouter = new express.Router({ mergeParams: true })

productReviewsRouter.post('/', async (req, res) => {
  const productId = req.params.productId 
  const body = req.body
  const cleanBody = cleanUserInput(body)

  try {
    const newReview = await Review.query().insertAndFetch({ ...cleanBody, productId })
    const serializedReview = ReviewSerializer.getSummary(newReview)
    return res.status(201).json({ review: serializedReview })
  } catch (error){
    if (error instanceof ValidationError){
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

productReviewsRouter.patch('/', async (req, res) => {
  const productId = req.params.productId
  const body = req.body
  const cleanBody = cleanUserInput(body)
  try {
    await Review.query().findById(cleanBody.id).update(cleanBody)
    const product = await Product.query().findById(productId)
    const reviews = await product.$relatedQuery('reviews')
    const serializedReviews = reviews.map(review => ReviewSerializer.getSummary(review))
    return res.status(201).json({reviews: serializedReviews})
  } catch (error) {
    if (error instanceof ValidationError){
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default productReviewsRouter