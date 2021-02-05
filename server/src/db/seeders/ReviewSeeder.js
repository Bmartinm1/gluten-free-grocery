import {Review, User, Product} from '../../models/index.js'

class ReviewSeeder {
  static async seed() {
    const testUser = await User.query().findOne({email:'test@gmail.com'})
    const testUserTwo = await User.query().findOne({email: 'testTwo@gmail.com'})
    const artisanBread = await Product.query().findOne({productName:'Artisan Baker White Bread Gluten Free'})
    const heritageBread = await Product.query().findOne({productName:'Heritage Style Whole Grain Bread Gluten Free' })
    const chexCereal = await Product.query().findOne({productName:'Corn Cereal'})
    const reviewsData = [
      {
        rating: 1,
        title: 'Toast it to get the most of it',
        content: 'This bread is unedible unless you toast it and cover it in butter.',
        userId: testUser.id,
        productId: artisanBread.id
      },
      {
        rating: 5,
        title: 'God tier bread',
        content: 'Eating this bread was like bathing in the moon pools of Aphrodites palace.',
        userId: testUser.id,
        productId: heritageBread.id
      },
      {
        rating: 3,
        userId: testUserTwo.id,
        productId: heritageBread.id
      },
      {
        rating: 4,
        title: 'A good classic cereal',
        userId: testUser.id,
        productId: chexCereal.id
      },
      {
        rating: 2,
        content: 'The corn flavor is gross',
        userId: testUserTwo.id,
        productId: chexCereal.id
      }
    ]

    for (const singleReviewData of reviewsData) {
      const currentReview = await Review.query().findOne(singleReviewData)

      if (!currentReview) {
        await Review.query().insert(singleReviewData)
      }
    }
  }
}

export default ReviewSeeder
