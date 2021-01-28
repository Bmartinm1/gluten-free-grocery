import express from 'express'
import objection from 'objection'
const { ValidationError } = objection

import { Product } from '../../../models/index.js'
import cleanUserInput from '../../../services/cleanUserInput.js'

const newProductRouter = new express.Router()

// newProductRouter.get('/', async (req, res) => {
//   try {
//     const 
//   } catch(errors) {

//   }
// })

newProductRouter.post('/new', async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)

  try {
    const newProduct = await Product.query().insertAndFetch(formInput)
    return res.status(201).json({ newProduct })
  } catch(errors) {
    if (errors instanceof ValidationError) {
      return res.status(422).json({ errors: errors.data })
    }
    return res.status(500).json({ errors })
  }
})

export default newProductRouter
