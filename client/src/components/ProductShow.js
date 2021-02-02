import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import translateServerErrors from '../services/translateServerErrors'

import NewReviewForm from './NewReviewForm'
import ReviewList from './ReviewList'

const ProductShow = ({ user }) => {
  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState({})
  const { id } = useParams()

  const getProduct = async () => {
    try {
      const response = await fetch(`/api/v1/products/${id}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setProduct(body.product)
      setReviews(body.product.reviews)
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  const addReview = async (review) => {
    try {
      const response = await fetch(`/api/v1/products/${id}/reviews`, {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify({ ...review, userId: user.id })
      })
      if(!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const errors = translateServerErrors(body.errors)
          setErrors(errors)
          return false
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
      } else {
        const body = await response.json()
        setReviews(
          [...reviews,
          body.review]
        )
        setErrors({})
        return true
      }
    } catch(error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className= "grid-container">
      <div className="product-show text-center">
        <h2>{product.brandName} {product.productName}</h2>
        <p>{product.description}</p>
      </div>

      <NewReviewForm
        addReview={addReview} 
        errors={errors}
      />

      <ReviewList 
        reviews={reviews}
      />
    </div>
  )
}

export default ProductShow
