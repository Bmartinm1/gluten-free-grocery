import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
  return (
    <div className='landing-page'>
      <div className="grid-container text-center landing-header grid-margin-y grid-y">
        <div className='cell'>
          <h3> <strong>Gluten Free Grocery</strong> helps shoppers find the best gluten free products!</h3>
        </div>
        <div className='cell'>
          <h5>
            <Link className='landing-link' to='/categories'>Explore Product Categories</Link>
          </h5>
        </div>
        <div className='cell'>
          <div className="grid-x grid-padding-x grid-margin-x grid-margin-y grid-padding-y">
            <div className="cell small-12 medium-4 landing-callout align-center">
              <h5><strong>Explore</strong> a continuously growing list of gluten free products</h5>
            </div>
            <div className="cell small-12 medium-4 landing-callout">
              <h5><strong>Save</strong> money by purchasing products rated highly for quality and value</h5>
            </div>
            <div className="cell small-12 medium-4 landing-callout">
              <h5><strong>Help</strong> other shoppers make informed decisions by leaving product reviews</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage