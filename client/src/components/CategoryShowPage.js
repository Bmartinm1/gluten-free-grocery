import React, { useState, useEffect } from "react"
import ProductTile from "./ProductTile.js"

const CategoryShowPage = props => {
  const [category, setCategory] = useState({
    id: "",
    name: "",
    products: []
  })
  const categoryId = props.match.params.categoryId

  const getCategory = async () => {
    try {
      const response = await fetch(`api/v1/categories/${categoryId}`)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      const body = await response.json()
      setCategory(body.category)
    } catch (error){
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
    <div>
      <h1>{category.name}</h1>
        {productTiles}
    </div>
  )
 }

export default CategoryShowPage
