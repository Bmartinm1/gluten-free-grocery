import React from 'react'


const CategoryTile = ({category}) => {
  return (
    <div className="category-tile cell small-6">
      <h4>
        {category}
      </h4>
    </div>
  )
}

export default CategoryTile
