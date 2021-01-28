import React, { useState, useEffect } from 'react'
import ReviewTile from './ReviewTile'

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    // get productId from props.match.params.productId
    try {
      const response = await fetch('/api/v1/reviews') //set up end point
      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setReviews(body.reviews)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  const reviewTiles = reviews.map(review => {
    return(
      <ReviewTile 
        key={review.id}
        review={review}
      />
    )
  }) 

  return(
    <div>
      {reviewTiles}
    </div>
  )
}

export default ReviewList