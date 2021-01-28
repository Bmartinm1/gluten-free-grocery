import React from 'react'
import { Link } from "react-router-dom"

const CategoryTile = ({category}) => {
  return (
    <Link to={`/${category.id}`}>
      <div className="category-tile cell small-6">
        <h4>
          {category.name}
        </h4>
      </div>
    </Link>
  )
}

export default CategoryTile
