import {connection} from '../boot.js'
import CategorySeeder from './seeders/CategorySeeder.js'
import ProductSeeder from "./seeders/ProductSeeder.js"

class Seeder {
  static async seed() {
    console.log('seeding categories')
    await CategorySeeder.seed()

    console.log('seeding products')
    await ProductSeeder.seed()
    
    console.log('done')
    await connection.destroy()

  }
}

export default Seeder