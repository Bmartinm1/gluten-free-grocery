class ProductSerializer {
  static async getDetails(product) {
    const allowedAttributes = ['id', 'productName', 'brandName', 'description', 'categoryId']
    const serializedProduct = {}

    for (const attribute of allowedAttributes) {
      serializedProduct[attribute] = product[attribute]
    }

    serializedProduct.reviews = await product.$relatedQuery('reviews')
    return serializedProduct
  }
}

export default ProductSerializer
