import React, { useState } from 'react'

const VoteButtons = ({review, user, addVote}) => {
  // const [yesClicked, setYesClicked] = useState(false)
  // const [noClicked, setNoClicked] = useState(false)

  let yesButtonClass = 'hollow button'
  let noButtonClass = 'hollow button'
    if (review.userVote == 'upVote') {
      yesButtonClass = 'button'
    } else if (review.userVote == 'downVote') {
      noButtonClass = 'button'
    }

  const handleVoteClick = (event) => {
    const voteData = {reviewId: review.id, userId: user.id}
    event.preventDefault()
    if(event.target.id == 'upVote') {
      // setYesClicked(true)
      voteData.voteType = 'upVote'
    } else if (event.target.id == 'downVote') {
      // setNoClicked(true)
      voteData.voteType = 'downVote'
    }
    return addVote(voteData)
  }

  return (
    <div className='grid-x'>
      <div className='cell small-12 medium-4'>
        <p>Was this review helpful?</p>
      </div>
      <div className='button-group tiny cell small-12 medium-8'>
        <button className={yesButtonClass} onClick={handleVoteClick}  id='upVote'>{`Yes (${review.upVotes})`}</button>
        <button className={noButtonClass} onClick={handleVoteClick} id='downVote'>{`No (${review.downVotes})`}</button>
      </div>
    </div>
  )
}

export default VoteButtons