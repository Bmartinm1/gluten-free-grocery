import React, { useState } from 'react'

import ErrorList from './ErrorList'

const EditReviewForm = ({ previousReview, patchReview, updateEditable, errors }) => {
  const [review, setReview] = useState({
    rating: previousReview.rating,
    title: previousReview.title || '',
    content: previousReview.content || '',
    id: previousReview.id
  })

  const handleInputChange = (event) => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSave = async (event) => {
    event.preventDefault()
    if(await patchReview(review)){
      return updateEditable()
    }
  }

  return (
    <div className='callout'>
      <form onSubmit={handleSave} >
        <div className='grid-container'>
        <ErrorList errors={errors} />
          <h3>Edit Review</h3>
          <div className='grid-x'>
            <div className='cell small-9'>
              <div className='grid-x grid-padding-x'>
                <div className="cell small-1">
                  <label htmlFor='edit-title' className='text-right middle'>Title:</label>
                </div>
                <div className="cell small-11">
                  <input
                    type='text'
                    id='edit-title'
                    name='title'
                    onChange={handleInputChange}
                    value={review.title}
                  />
                </div>
              </div>
            </div>
            <div className="cell small-3">
              <div className='grid-x grid-padding-x'>
                <div className='cell small-8'>
                  <label htmlFor='edit-rating' className='text-right middle'>Rating:</label>
                </div>
                <div className='cell small-4'>
                  <select 
                    className='drop-down-rating'
                    id='edit-rating'
                    name='rating'
                    onChange={handleInputChange}
                    value={review.rating}
                    >
                    <option value='1' >1</option>
                    <option value='2' >2</option>
                    <option value='3' >3</option>
                    <option value='4' >4</option>
                    <option value='5' >5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='grid-x grid-padding-x '>
            <div className='cell small-1'>
              <label htmlFor='edit-review' className='text-right middle'>Review:</label>
            </div>
            <div className='cell small-11'>
              <textarea
                name='content'
                onChange={handleInputChange}
                value={review.content}
              />
            </div>
          </div>
          <input className='button' type='submit' value='Save' />
        </div>
      </form>
    </div>
  )
}

export default EditReviewForm