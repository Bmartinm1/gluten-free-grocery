import React, { useState } from 'react'

const VoteButtons = ({upVotes, downVotes, reviewId, user, addVote}) => {
  const [yesClicked, setYesClicked] = useState(false)
  const [noClicked, setNoClicked] = useState(false)

  let yesButtonClass = 'hollow button'
  let noButtonClass = 'hollow button'
    if (yesClicked) {
      yesButtonClass = 'button disabled'
      noButtonClass += ' disabled'
    } else if (noClicked) {
      noButtonClass = 'button disabled'
      yesButtonClass += ' disabled'
    }

  const handleVoteClick = (event) => {
    const voteData = {reviewId, userId: user.id}
    event.preventDefault()
    if(event.target.id === "upVote") {
      setYesClicked(true)
      voteData.voteType = 'upVote'
    } else if (event.target.id === 'downVote') {
      setNoClicked(true)
      voteData.voteType = 'downVote'
    }
    if(!addVote(voteData)) {
      setYesClicked(false)
      setNoClicked(false)
    } 
  }

  return (
    <div className='grid-x'>
      <div className='cell small-4'>
        <p>Was this review helpful?</p>
      </div>
      <div className='button-group tiny cell small-8'>
        <button className={yesButtonClass} onClick={handleVoteClick}  id='upVote'>{`Yes (${upVotes})`}</button>
        <button className={noButtonClass} onClick={handleVoteClick} id='downVote'>{`No (${downVotes})`}</button>
      </div>
    </div>
  )
}

export default VoteButtons