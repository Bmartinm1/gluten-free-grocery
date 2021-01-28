import React from "react"

const ReviewForm = (props) => {
  return(
    <div className="callout">
      <h1>Submit A Review For This Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          name="rating"
          onChange={handleInputChange}
          value={review.rating}
        />
      </label>
      </form>
    </div>
  )
}

export default ReviewForm