import React, { useState, useEffect } from 'react'

import ReviewList from './ReviewList'

const ProductShow = props => {
  const [product, setProduct] = useState({reviews: []})
  const productId = props.match.params.id

  const getProduct = async () => {
    try {
      const response = await fetch(`/api/v1/products/${productId}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setProduct(body.product)
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className= "grid-container">
      <div className="product-show text-center">
        <h2>{product.brandName} {product.productName}</h2>
        <p>{product.description}</p>
      </div>
      <ReviewList 
        reviews={product.reviews}
      />
    </div>
  )
}

export default ProductShow
