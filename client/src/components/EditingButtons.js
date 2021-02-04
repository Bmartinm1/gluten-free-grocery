import React from 'react'

const EditingButtons = ({handleEditClick, handleDeleteClick}) => {
  return(
    <div className="tiny button-group">
      <button type="button" className="button" onClick={handleEditClick}>Edit</button>
      <button type="button" className="button" onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default EditingButtons