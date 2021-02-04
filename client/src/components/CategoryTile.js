import React from 'react'
import { Link } from "react-router-dom"

const CategoryTile = ({ category }) => {
  return (
    <div className="cell">
      <div className="card" id='category-card'>
      <Link to={ `/categories/${category.id}` }>
        <img src={ category.imgUrl } />
        <div className="card-section">
            <h4>
              { category.name }
            </h4>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default CategoryTile
