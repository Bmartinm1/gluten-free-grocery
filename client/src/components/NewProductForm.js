import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import ErrorList from './ErrorList'
import translateServerErrors from '../services/translateServerErrors'

const NewProductForm = props => {
  const [newProduct, setNewProduct] = useState({
    productName: '',
    brandName: '',
    description: ''
  })

  const categoryId = props.match.params.categoryId
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const addProduct = async (newProduct) => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}/products`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newProduct)
      })
      if (!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage=`${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
      } else {
        const body = await response.json()
        setShouldRedirect(true)
      }
    } catch ( error ) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const clearForm = () => {
    setNewProduct({
      productName: '',
      brandName: '',
      description: ''
    })
    setErrors({})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    addProduct(newProduct)
    if (shouldRedirect === true) {
      clearForm()
    } 
  }
  
  if (shouldRedirect) {
    return <Redirect to={`/categories/${categoryId}`} />
  }
  
  return (
    <>
      <h1>Submit a new product for approval here</h1>
      <form onSubmit={handleSubmit} className="new-product-form" >
        <ErrorList errors={errors} />

        <label>
          Product name:
          <input
            type='text'
            name='productName'
            onChange={handleInputChange}
            value={newProduct.productName}
          />
        </label>

        <label>
          Brand name:
          <input
            type='text'
            name='brandName'
            onChange={handleInputChange}
            value={newProduct.brandName}
          />
        </label>

        <label>
          Product description:
          <input
            type='text'
            name='description'
            onChange={handleInputChange}
            value={newProduct.description}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default NewProductForm

