/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Category } from '../../models/index.js'

class CategorySeeder {
  static async seed () {
    const categoriesData = [
      {
        name: 'Bread & Bakery',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/shutterstock_91804175.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/breads1920x1080.jpg'
      },
      {
        name: 'Breakfast & Cereal',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/breakfastb.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/breakfastb_1920x1080.jpg'
      },
      {
        name: 'Canned Goods & Soups',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/cannedfoods500x333.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/cannedfoods1920x1080.jpg'
      },
      {
        name: 'Condiments/Spices & Baking',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/condiments.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/condiments1920x1080.jpg'
      },
      {
        name: 'Cookies, Snacks & Candy',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/cookies.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/cookies1920x1080.jpg'
      },
      {
        name: 'Frozen Foods',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/frozenfoods2.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/frozenfoods1920x1080.jpg'
      },
      {
        name: 'Grains, Pasta & Sides',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/grainspastas.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/grainspastas1920x1080.jpg'
      },
      {
        name: 'Miscellaneous',
        imgUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/miscellaneous.jpg',
        backgroundImageUrl: 'https://gluten-free-grocery-imgs.s3.us-east-2.amazonaws.com/miscellaneous1920x1080.jpg'
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
