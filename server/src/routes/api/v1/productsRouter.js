import express from 'express'

import { Product } from '../../../models/index.js'
import ProductSerializer from '../../../serializers/ProductSerializer.js'

const productsRouter = new express.Router()

productsRouter.get('/:id', async (req, res) => {
  const id = req.params.id 
  try {
    const product = await Product.query().findById(id)
    const serializedProduct = ProductSerializer.getSummary(product)
    return res.status(200).json({ product: serializedProduct })
  } catch (errors) {
    return res.status(500).json({ errors })
  }
})

export default productsRouter