import React from 'react'

const ReviewTile = ({ review }) => {
  let reviewBody
  if(review.title && review.content){
    reviewBody = 
    <div>
      <h5> {review.title} rating: {review.rating}</h5>
      <p> {review.content} </p>
    </div>
  } else if(review.content){
    reviewBody = 
    <div>
      <h5>Review rating: {review.rating}</h5>
      <p> {review.content} </p>
    </div>
  } else if(review.title){
    reviewBody =
    <h5> {review.title} rating: {review.rating}</h5>
  } else {
    reviewBody =
    <h5> rating: {review.rating}</h5>
  }
  return(
    <div>
      {reviewBody}
    </div>
  )
}

export default ReviewTile