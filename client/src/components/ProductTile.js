import React from 'react'
import { Link } from 'react-router-dom'

const ProductTile = ({product}) => {
  return (
    <div className="product-tile">
      <Link to={`/products/${product.id}`}>
        <h4>{product.brandName}, {product.productName}</h4>
        <p>{product.description}</p>
      </Link>
    </div>
  )
}

export default ProductTile
