import React from 'react'

const ProductTile = ({product}) => {
  return (
    <div>
      <h4>{product.brandName}, {product.productName}</h4>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductTile
