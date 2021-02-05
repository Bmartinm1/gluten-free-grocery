// include all of your models here using CommonJS requires
const User = require('./User.js')
const Category = require('./Category')
const Product = require('./Product')
const Review = require('./Review')
const Vote = require('./Vote')

module.exports = {User, Category, Product, Review, Vote};
