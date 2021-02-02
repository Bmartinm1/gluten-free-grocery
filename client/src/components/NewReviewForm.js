import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'

import ErrorList from './ErrorList'
import translateServerErrors from '../services/translateServerErrors'

const NewReviewForm = ({ addReview }) => {
  const [newReview, setNewReview] = useState({
    rating: '',
    title: '',
    content: ''
  })

  const [errors, setErrors] = useState({})
  const [changes, setChanges] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault()
    addReview(newReview)
    clearForm()
  }

  const clearForm = () => {
    setNewReview({
      rating: '',
      title: '',
      content: ''
    })
    setErrors({})
  }

  return (
    <div>
      <h1>Submit a review, ya filthy animal</h1>
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
          <input
            type='text'
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

// useEffect(() => {
//   if (!isAddMode) {
//       // get user and set form fields
//       userService.getById(id).then(user => {
//           const fields = ['title', 'firstName', 'lastName', 'email', 'role'];
//           fields.forEach(field => setFieldValue(field, user[field], false));
//           setUser(user);
//       });
//   }
// }, []);