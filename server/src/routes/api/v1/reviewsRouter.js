import express from 'express'
import ReviewSerializer from '../../../serializers/ReviewSerializer.js'
import { Product, Review, Vote } from '../../../models/index.js'

const reviewsRouter = new express.Router()

reviewsRouter.put('/vote', async (req, res) => {
  const {userId, reviewId, voteType} = req.body
  try {
    const vote = await Vote.query().findOne({userId, reviewId})
    if (vote && vote.voteType == voteType) {
      return res.status(304)
    } else {
      if(!vote) {
        await Vote.query().insert({userId, reviewId, voteType})
        res.status(201)
      } else if (vote.voteType != voteType) {
        await Vote.query().findById(vote.id).patch({voteType})
        res.status(200)
      }
      const review = await Review.query().findById(reviewId)
      const product = await Product.query().findById(review.productId)
      const reviews = await product.$relatedQuery('reviews')
      const serializedReviews = await Promise.all(reviews.map(review => {
        return ReviewSerializer.getDetails(review, userId)
      }))
      return res.json({reviews: serializedReviews})
    }
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

reviewsRouter.delete('/:id', async (req, res) => {
  const reviewId = req.params.id
  try {
    const review = await Review.query().findById(reviewId)
    const userId = review.userId
    const product = await Product.query().findById(review.productId)
    await Review.query().deleteById(reviewId)
    const reviews = await product.$relatedQuery('reviews')
    const serializedReviews = await Promise.all(reviews.map(review => {
      return ReviewSerializer.getDetails(review, userId)
    }))
    return res.status(200).json({ reviews: serializedReviews })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
})

export default reviewsRouter
