import React from 'react'
import { Link } from "react-router-dom"

const CategoryTile = ({category}) => {
  return (
    <div className="category-tile cell small-6">
      <Link to={`/categories/${category.id}`}>

        <h4>
          {category.name}
        </h4>
      </Link>
    </div>
  )
}

export default CategoryTile
