import React from 'react'
import { Link } from "react-router-dom"

const NewProductFormTile = () => {
  return ( 
    <div className="cell">
      <div className="card" id='category-card'>
        <div className="card-section">
        <Link to={`/categories/${categoryId}/products/new`}>
          <div className="product-form-link">
            <p>
              Can't find what you're looking for? Submit a request for a new product here!
            </p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default NewProductFormTile


