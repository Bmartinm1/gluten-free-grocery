const { BelongsToOneRelation } = require('./Model')
const Model = require('./Model')

class Review extends Model {
  static get tableName() {
    return 'reviews'
  }

  static get jsonSchema(){
    return {
      type: 'object',
      required: ['rating'],
      properties: {
        rating: {
          type: ['integer', 'string'],
          minimum: 1,
          maximum: 5
        },
        title: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        content: {
          type: 'string',
          minLength: 1,
          maxLength: 1000
        }
      }
    }
  }

  static get relationMappings() {
    const { User, Product, Vote } = require('./index.js')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'reviews.userId',
          to: 'users.id'
        }
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'reviews.productId',
          to: 'products.id'
        }
      },
      votes: {
        relation: Model.HasManyRelation,
        modelClass: Vote,
        join: {
          from: 'reviews.id',
          to: 'votes.reviewId'
        }
      },
      votedUsers: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'reviews.id',
          through: {
            from: 'votes.reviewId',
            to: 'votes.userId'
          },
          to: 'users.id'
        }
      }
    }
  }
} 

module.exports = Review
