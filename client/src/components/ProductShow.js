import React, { useState, useEffect } from 'react'

const ProductShow = props => {
  const [product, setProduct] = useState({
    id: '',
    brandName: '',
    productName: '',
    description: ''
  })

  const getProduct = async () => {
    const productId = props.match.params.id
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
    <div className="product-show">
      <h2>{product.brandName} {product.productName}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductShow
