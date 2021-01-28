class ProductSerializer {
  static getSummary(product) {
    const allowedAttributes = ['id', 'productName', 'brandName', 'description', 'categoryId']
    const serializedProduct = {}

    for (const attribute of allowedAttributes) {
      serializedProduct[attribute] = product[attribute]
    }

    return serializedProduct
  }
}

export default ProductSerializer
