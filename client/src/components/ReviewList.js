import React from 'react'
import ReviewTile from './ReviewTile'

const ReviewList = ({reviews, user, patchReview, errors, reviewDelete}) => {
  const reviewTiles = reviews.map(review => {
    let belongsToUser = false
    if (user.id == review.userId) {
      belongsToUser = true
    }
    return(
      <ReviewTile 
        key={review.id}
        review={review}
        belongsToUser={belongsToUser}
        patchReview={patchReview}
        errors={errors}
        reviewDelete={reviewDelete}
      />
    )
  }) 

  return(
    <div className="callout">
      <h3>Reviews</h3>
      {reviewTiles}
    </div>
  )
}

export default ReviewList