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
      }
    }
  }

  static get relationMappings() {
    const {Category, Review} = require('./index.js')

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'products.categoryId',
          to: 'categories.id'
        } 
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'products.id',
          to: 'reviews.productId'
        }
      }
    }
  }
}

module.exports = Product
