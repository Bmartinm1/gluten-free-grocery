import Product from "../../models/Product.js"

class ProductSeeder {
  static async seed() {
    const productsData = [
      {
        productName: "Heritage Style Whole Grain Bread Gluten Free",
        brandName: "Canyon Bakehouse",
        description: "Certified Gluten Free. Dairy, Soy, and nut free.",
        categoryId: "1"
      },
      {
        productName: "Artisan Baker White Bread Gluten Free",
        brandName: "Schar",
        description: "Baked with Ancient Grains.",
        categoryId: "1"
      },
      {
        productName: "Corn Cereal",
        brandName: "Chex",
        description: "Oven toasted Corn Cereal",
        categoryId: "2"
      },
      {
        productName: "New England Clam Chowder Soup",
        brandName: "Progresso Rich & Hearty",
        categoryId: "3"
      },
      {
        productName: "Gluten Free Measure For Measure Flour",
        brandName: "King Arthur",
        description: "Substitute 1:1 for Standard all-purpose White Flour",
        categoryId: "4"
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