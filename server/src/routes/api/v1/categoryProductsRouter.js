import express from 'express'
import objection from 'objection'
const { ValidationError } = objection

import { Product } from '../../../models/index.js'
import cleanUserInput from '../../../services/cleanUserInput.js'

const categoryProductsRouter = new express.Router({ mergeParams: true })

categoryProductsRouter.post('/', async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const categoryId = req.params.categoryId
  try {
    const newProduct = await Product.query().insertAndFetch({ ...formInput, categoryId})
    return res.status(201).json({ newProduct })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default categoryProductsRouter
