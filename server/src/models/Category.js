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
}

module.exports = Category