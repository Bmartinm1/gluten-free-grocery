import ReviewSerializer from './ReviewSerializer.js'

class ProductSerializer {
  static async getDetails(product) {
    const allowedAttributes = ['id', 'productName', 'brandName', 'description', 'categoryId']
    const serializedProduct = {}

    for (const attribute of allowedAttributes) {
      serializedProduct[attribute] = product[attribute]
    }

    serializedProduct.reviews = await product.$relatedQuery('reviews')
    serializedProduct.reviews = serializedProduct.reviews.map(review => {
      return ReviewSerializer.getSummary(review)
    })
    return serializedProduct
  }
}

export default ProductSerializer
