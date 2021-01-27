import express from 'express'
import { Product } from '../../../models/index.js'

const productsRouter = new express.Router()

productsRouter.get('/', async (req, res) => {
    try {
      const products = await Product.query()
      return res.status(200).json({ products })
    } catch (errors) {
      return res.status(500).json({ errors })
    }
})

export default productsRouter
