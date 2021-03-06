import ReviewSerializer from './ReviewSerializer.js'

class ProductSerializer {
  static async getDetails(product, currentUserId) {
    const allowedAttributes = ['id', 'productName', 'brandName', 'description', 'categoryId']
    const serializedProduct = {}

    for (const attribute of allowedAttributes) {
      serializedProduct[attribute] = product[attribute]
    }

    serializedProduct.reviews = await product.$relatedQuery('reviews')
    serializedProduct.reviews = await Promise.all(serializedProduct.reviews.map(review => {
      return ReviewSerializer.getDetails(review, currentUserId)
    }))
    return serializedProduct
  }
}

export default ProductSerializer
