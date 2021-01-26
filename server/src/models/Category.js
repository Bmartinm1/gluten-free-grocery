const Model = require('./Model')

class Category extends Model {
  static get tableName() {
    return 'categories'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: {type: 'string'}
      }
    }
  }

  static get relationMappings() {
    const Product = require('./Product')

    return {
        product: {
            relation: Model.BelongsToOneRelation,
            modelClass: Product,
            join: {
                from: "categories.productId",
                to: "products.id"
            } 
        }
    }
}

}

module.exports = Category