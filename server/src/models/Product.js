const Model = require('./Model')

class Product extends Model {
  static get tableName() {
    return 'products'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['brandName', 'productName'],
      properties: {
        productName: {type: 'string'},
        brandName: {type: 'string'},
        description: {type: 'string'},
        categoryId: {type: ['integer', 'string']}
      }
    }
  }

  static get relationMappings() {
      const Category = require('./Category')

      return {
          category: {
              relation: Model.HasManyRelation,
              modelClass: Category,
              join: {
                  from: "products.categoryId",
                  to: "categories.id"
              } 
          }
      }
  }

}

module.exports = Product