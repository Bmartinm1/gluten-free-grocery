import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ProductTile from './ProductTile.js'


const CategoryShowPage = props => {
  const [category, setCategory] = useState({
    id: "",
    name: "",
    products: []
  })

  const categoryId = props.match.params.id

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const body = await response.json()
      setCategory(body.category)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  const productTiles = category.products.map((product) => {
    return (
      <ProductTile
        key={product.id}
        product={product}
      />
    )
  })

  return (
    <div className='grid-container text-center' id='category-show' >
      <img src={`${category.backgroundImageUrl}`} className='backgroundImg' />
      <div className='showpage-content'>
        <h1>{category.name}</h1>
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          {productTiles}
        </div>
        <div className='grid-x grid-margin-x'>
          <div className="small-4 small-offset-4" id='new-product-form-card'>
            <Link to={`/categories/${categoryId}/products/new`}>
              <div className="new-product-link-content">
                <h4>Can't find what you're looking for?</h4>
                <p>Submit a request for a new product here!</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryShowPage
