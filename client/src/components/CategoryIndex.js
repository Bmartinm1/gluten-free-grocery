import React, { useState, useEffect } from 'react'

import CategoryTile from './CategoryTile'

const CategoryIndex = props => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await fetch('/api/v1/categories')

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }

      const body = await response.json()
      setCategories(body.categories)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const categoryTiles = categories.map(categoryObject => {
    return (
      <CategoryTile
        key={ categoryObject.id }
        category={ categoryObject.name }
      />
    )
  })

  return (
    <div>
      <h1>Category Index Page</h1>
      {categoryTiles }
    </div>
  )
}

export default CategoryIndex
