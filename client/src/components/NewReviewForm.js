import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import _ from 'lodash'

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
    <div className='callout'>
      <h1>Submit Review</h1>
      <form onSubmit={handleSubmit} className='new-review-form'>
        <ErrorList errors={errors} />

        <label>
          Rating:
          <select 
            className='drop-down-rating'
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

        <label>
          Title:
          <input
            type='text'
            name='title'
            onChange={handleInputChange}
            value={newReview.title}
          />
        </label>

        <label>
          Review:
          <textarea
            name='content'
            onChange={handleInputChange}
            value={newReview.content}
          />
        </label>

        <input className='button' type='submit' value='Submit' />

      </form>
    </div>
  )
}

export default NewReviewForm
