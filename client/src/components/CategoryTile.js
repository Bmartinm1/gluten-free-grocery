import React from 'react'
import { Link } from "react-router-dom"

const CategoryTile = ({ category }) => {
  return (
    <div className="cell">
      <div className="card" id='category-card'>
        <img src={ category.imgUrl } />
        <div className="card-section">
          <Link to={ `/categories/${category.id}` }>
            <h4>
              { category.name }
            </h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryTile
