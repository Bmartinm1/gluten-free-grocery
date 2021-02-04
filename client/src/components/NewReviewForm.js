import React, { useState } from 'react'

import ErrorList from './ErrorList'

const NewReviewForm = ({ addReview, errors }) => {
  const [newReview, setNewReview] = useState({
    rating: '',
    title: '',
    content: ''
  })

  const handleInputChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(await addReview(newReview)){
      clearForm()
    }
  }

  const clearForm = () => {
    setNewReview({
      rating: '',
      title: '',
      content: ''
    })
  }

  return (
    <div className='callout form-container'>
      <h3>Submit Review</h3>
      <form onSubmit={handleSubmit} className='new-review-form'>
        <ErrorList errors={errors} />

        <label className='form-label'>
          Rating:
          <select 
            className='drop-down-rating form-field'
            name='rating'
            onChange={handleInputChange}
            value={newReview.rating}
            >
            <option value='' >Please select a rating</option>
            <option value='1' >1</option>
            <option value='2' >2</option>
            <option value='3' >3</option>
            <option value='4' >4</option>
            <option value='5' >5</option>
          </select>
        </label>

        <label className='form-label'>
          Title:
          <input
            type='text'
            name='title'
            onChange={handleInputChange}
            value={newReview.title}
            className='form-field'
          />
        </label>

        <label className='form-label'>
          Review:
          <textarea
            name='content'
            onChange={handleInputChange}
            value={newReview.content}
            className="form-field"
          />
        </label>

        <input className='button' type='submit' value='Submit' />

      </form>
    </div>
  )
}

export default NewReviewForm
