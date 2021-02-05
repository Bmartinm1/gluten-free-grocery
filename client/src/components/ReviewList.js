import React from 'react'
import ReviewTile from './ReviewTile'

const ReviewList = ({reviews, user, patchReview, errors, addVote, reviewDelete}) => {
  const reviewTiles = reviews.map(review => {
    return(
      <ReviewTile 
        key={review.id}
        review={review}
        patchReview={patchReview}
        errors={errors}
        user={user}
        addVote={addVote}
        reviewDelete={reviewDelete}
      />
    )
  }) 

  return(
    <div className="callout review-list-container">
      <h3>Reviews</h3>
      {reviewTiles}
    </div>
  )
}

export default ReviewList
