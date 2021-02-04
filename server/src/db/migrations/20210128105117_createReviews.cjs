/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('reviews', table => {
    table.bigIncrements('id')
    table.integer('rating').notNullable()
    table.string('title')
    table.string('content', 1000)
    table.integer('upVotes').defaultTo(0)
    table.integer('downVotes').defaultTo(0)
    table.bigInteger('userId').notNullable().unsigned().index().references('users.id')
    table.bigInteger('productId').notNullable().unsigned().index().references('products.id')
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('reviews')
}
