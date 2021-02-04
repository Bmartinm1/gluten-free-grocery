import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const ReveiwDeleteButton = (props) => {
  const [ review, setReview ] = useState ({
    rating: "",
    title: "",
    content: "",
  })

  const [ redirect, setRedirect ] = useState(false)
  const { id: userId } = props.match.params 

  const reviewDelete = async (reviewPayload) => {
    try {
      const response = await fetch(`/api/v1/products/${userId}/reviews`, {
        method: 'DELETE',
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(reviewPayload)
      })
      setRedirect(true)
      } catch(error) {
        console.error(`Error in fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    fetchReview()
  }, [])

  const onSubmitHandler = (event) => {
    event.preventDefault()
    reviewDelete(review)
  }

  const clearForm = (event) => {
    event.preventDefault()
    setRedirect(true)
  }

  if(redirect){
    return <Redirect to={`/categories/${categoryId}`} />
  }
}

export default ReveiwDeleteButton