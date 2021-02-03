/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Category } from '../../models/index.js'

class CategorySeeder {
  static async seed () {
    const categoriesData = [
      {
        name: 'Bread & Bakery',
        imgUrl: ''
      },
      {
        name: 'Breakfast & Cereal',
        imgUrl: ''
      },
      {
        name: 'Canned Goods & Soups',
        imgUrl: ''
      },
      {
        name: 'Condiments/Spices & Baking',
        imgUrl: ''
      },
      {
        name: 'Cookies, Snacks & Candy',
        imgUrl: ''
      },
      {
        name: 'Frozen Foods',
        imgUrl: ''
      },
      {
        name: 'Grains, Pasta & Sides',
        imgUrl: ''
      },
      {
        name: 'Miscellaneous',
        imgUrl: ''
      }
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
