
class CategorySerializer {
  static getSummary(category) {
    const allowedAttributes = ['id', 'name', 'imgUrl']
    const serializedCategory = {}

    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute]
    }

    return serializedCategory
  }

  static async getDetails(category) {
    const serializedCategory = this.getSummary(category)
    serializedCategory.products = await category.$relatedQuery("products")
    return serializedCategory
  }
}

export default CategorySerializer
