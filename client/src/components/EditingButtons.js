import React from 'react'

const EditingButtons = ({handleEditClick}) => {
  return(
    <div className="tiny button-group">
      <button type="button" className="button" onClick={handleEditClick}>Edit</button>
      <button type="button" className="button">Delete</button>
    </div>
  )
}

export default EditingButtons