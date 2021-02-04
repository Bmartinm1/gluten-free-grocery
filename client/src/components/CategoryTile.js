import React from 'react'
import { Link } from "react-router-dom"

const CategoryTile = ({ category }) => {
  return (
    <div className="cell">
      <Link to={ `/categories/${category.id}` }>
        <div className="card" id='category-card'>
          <img src={ category.imgUrl } />
          <div className="card-section">
              <h4>
                { category.name }
              </h4>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryTile
