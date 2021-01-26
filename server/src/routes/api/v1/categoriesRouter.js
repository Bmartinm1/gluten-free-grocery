import express from 'express'
import {Category} from '../../../models/index.js'

const categoriesRouter = new express.Router()

categoriesRouter.get('/', async (req, res) => {
  try {
    const categories = await Category.query()
    return res.status(200).json({categories})
  } catch (error) {
    return res.status(500).json({errors: error})
  }
})

export default categoriesRouter