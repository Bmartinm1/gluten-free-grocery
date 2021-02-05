import React, { useState } from 'react'
import EditingButtons from './EditingButtons'
import EditReviewForm from './EditReviewForm'
import VoteButtons from './VoteButtons'

const ReviewTile = ({ review, user, patchReview, errors, addVote, reviewDelete }) => {
  const [editable, setEditable] = useState(false)
  
  const handleEditClick = (event) => {
    event.preventDefault()
    return setEditable(true)
  }
  const handleDeleteClick = (event) => {
    event.preventDefault()
    return reviewDelete(review.id)
  }

  let buttons; 
  if (user.id == review.userId) {
    buttons = <EditingButtons 
        handleEditClick={handleEditClick} 
        handleDeleteClick={handleDeleteClick}
      />
  } else {
    buttons = <VoteButtons 
      review={review}
      user={user}
      addVote={addVote}
    />
  }

  const updateEditable = () => {
    return setEditable(false)
  }

  if (editable) {
    return (
      <EditReviewForm 
        previousReview={review}
        patchReview={patchReview}
        updateEditable={updateEditable}
        errors={errors} 
      />
    )
  }
  return(
    <div className="callout review-tile">
      <div className="grid-x">
        <h5 className="cell small-6">
          {review.title || 'Untitled'}
        </h5>
        <p className="cell small-6 text-right">
          Rating: {review.rating}
        </p>
      </div>
      <p>{review.content}</p>
      {buttons}
    </div>
  )
}

export default ReviewTile