/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Category } from '../../models/index.js'

class CategorySeeder {
  static async seed () {
    const categoriesData = [
      {
        name: 'Bread & Bakery',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/shutterstock_91804175.jpg'
      },
      {
        name: 'Breakfast & Cereal',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/breakfast.jpg'
      },
      {
        name: 'Canned Goods & Soups',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/cannedfoods.jpg'
      },
      {
        name: 'Condiments/Spices & Baking',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/condiments.jpg'
      },
      {
        name: 'Cookies, Snacks & Candy',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/cookies.jpg'
      },
      {
        name: 'Frozen Foods',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/frozenfoods.jpg'
      },
      {
        name: 'Grains, Pasta & Sides',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/grainspastas.jpg'
      },
      {
        name: 'Miscellaneous',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/miscellaneous.jpg'
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
