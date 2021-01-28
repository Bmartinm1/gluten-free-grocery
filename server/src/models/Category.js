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
    const Product = require('./Product.js')

    return {
        products: {
            relation: Model.HasManyRelation,
            modelClass: Product,
            join: {
                from: "categories.id",
                to: "products.categoryId"
            } 
        }
    }
}

}

module.exports = Category