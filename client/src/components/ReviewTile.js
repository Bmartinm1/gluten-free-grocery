import React from 'react'

const ReviewTile = ({ review }) => {
  return(
    <div className="callout">
      <div className="grid-x">
        <h5 className="cell small-6">
          {review.title || 'Untitled'}
        </h5>
        <p className="cell small-6 text-right">
          Rating: {review.rating}
        </p>
      </div>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewTile