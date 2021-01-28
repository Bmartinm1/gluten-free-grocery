import { Product, Category } from "../../models/index.js"

class ProductSeeder {
  static async seed() {
    const bread = await Category.query().findOne({ name: "Bread & Bakery" })
    const cereal = await Category.query().findOne({ name: "Breakfast & Cereal" })
    const soup = await Category.query().findOne({ name: "Canned Goods & Soups" })
    const baking = await Category.query().findOne({ name: "Condiments/Spices & Baking" })

    const productsData = [
      {
        productName: "Heritage Style Whole Grain Bread Gluten Free",
        brandName: "Canyon Bakehouse",
        description: "Certified Gluten Free. Dairy, Soy, and nut free.",
        categoryId: bread.id
      },
      {
        productName: "Artisan Baker White Bread Gluten Free",
        brandName: "Schar",
        description: "Baked with Ancient Grains.",
        categoryId: bread.id
      },
      {
        productName: "Corn Cereal",
        brandName: "Chex",
        description: "Oven toasted Corn Cereal",
        categoryId: cereal.id
      },
      {
        productName: "New England Clam Chowder Soup",
        brandName: "Progresso Rich & Hearty",
        categoryId: soup.id
      },
      {
        productName: "Gluten Free Measure For Measure Flour",
        brandName: "King Arthur",
        description: "Substitute 1:1 for Standard all-purpose White Flour",
        categoryId: baking.id
      }
    ]

    for (const singleProductData of productsData) {
      const currentProduct = await Product.query().findOne(singleProductData)

      if (!currentProduct) {
        await Product.query().insert(singleProductData)
      }
    }
  }
}

export default ProductSeeder