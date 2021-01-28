import express from 'express'

import {Category} from '../../../models/index.js'
import CategorySerializer from '../../../serializers/CategorySerializer.js'

const categoriesRouter = new express.Router()

categoriesRouter.get('/', async (req, res) => {
  try {
    
    const categories = await Category.query()
    const serializedCategories = categories.map(category => {
      return CategorySerializer.getSummary(category)
    })

    return res.status(200).json({categories: serializedCategories })

  } catch (error) {
    return res.status(500).json({errors: error})
  }
})

categoriesRouter.get('/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId
    const category = await Category.query().findById(categoryId)
    const serializedCategory = await CategorySerializer.getDetails(category)
    return res.status(200).json({ category: serializedCategory })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default categoriesRouter
