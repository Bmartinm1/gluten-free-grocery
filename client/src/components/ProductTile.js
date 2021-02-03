import React from 'react'
import { Link } from 'react-router-dom'

const ProductTile = ({product}) => {
  return (
    <div className="cell">
      <div className="card" id='product-card'>
        <img src={product.imgUrl} />
        <div className="card-section">
        <Link to={`/products/${product.id}`}>
          <h4>{product.brandName}, {product.productName}</h4>
          <p>{product.description}</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductTile
