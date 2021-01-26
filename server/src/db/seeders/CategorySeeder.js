/* eslint-disable no-await-in-loop, no-restricted-syntax */
import {Category} from '../../models/index.js'

class CategorySeeder {
  static async seed() {
    const categoriesData = [
      {name: 'Bread & Bakery'},
      {name: 'Breakfast & Cereal'},
      {name: 'Canned Goods & Soups'},
      {name: 'Condiments/Spices & Baking'},
      {name: 'Cookies, Snacks & Candy'},
      {name: 'Frozen Foods'},
      {name: 'Grains, Pasta & Sides'},
      {name: 'Miscellaneous'}
    ] 

    for (const singleCategoryData of categoriesData) {
      const currentCategory = await Category.query().findOne(singleCategoryData)

      if (!currentCategory) {
        await Category.query().insert(singleCategoryData)
      }
    }
  }
}

export default CategorySeeder