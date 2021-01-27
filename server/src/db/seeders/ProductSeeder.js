/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Product } from '../../models/index.js'

class ProductSeeder {
    static async seed () {
        const productsData = [
            { brandName: `Udi's`, productName: '7-Grain', description: 'It has seven grains', categoryId: '1' },
            { brandName: `Udi's`, productName: 'Soft White', description: `It's soft and white`, categoryId: '1' },
            { brandName: `Udi's`, productName: 'Plain Bagels', description: 'They plain, but they also bagels', categoryId: '1' },
            { brandName: 'Barilla', productName: 'Spaghetti', description: 'Without the gluten', categoryId: '7' },
            { brandName: 'Area 51', productName: 'Test Subject 393824', description: 'Armed and dangerous', categoryId: '8' },
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
