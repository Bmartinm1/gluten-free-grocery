const { BelongsToOneRelation } = require('./Model')
const Model = require('./Model')

class Review extends Model {
  static get tableName() {
    return 'reviews'
  }

  static get jsonSchema(){
    return {
      type: 'object',
      required: ['rating', 'userId'],
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
        },
        userId: {
          type: ['integer', 'string']
        }
      }
    }
  }

  static get relationMappings() {
    const { User } = require('./index.js')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'reviews.userId',
          to: 'users.id'
        }
      }
    }
  }
} 

module.exports = Review