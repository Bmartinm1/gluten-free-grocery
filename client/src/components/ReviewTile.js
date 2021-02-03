import React, { useState } from 'react'
import EditingButtons from './EditingButtons'
import EditReviewForm from './EditReviewForm'

const ReviewTile = ({ review, belongsToUser, patchReview, errors }) => {
  const [editable, setEditable] = useState(false)
  
  const handleEditClick = (event) => {
    event.preventDefault()
    return setEditable(true)
  }

  let editingButtons; 
  if (belongsToUser) {
    editingButtons = <EditingButtons 
        handleEditClick={handleEditClick} 
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
      {editingButtons}
    </div>
  )
}

export default ReviewTile