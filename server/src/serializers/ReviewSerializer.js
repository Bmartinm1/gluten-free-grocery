class ReviewSerializer {
  static getSummary(review) {
    const allowedAttributes = ['id', 'rating', 'title', 'content', 'userId']
    const serializedReview = {}

    for (const attribute of allowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }

    return serializedReview
  }

  static async getDetails(review, currentUserId) {
    const serializedReview = this.getSummary(review)
    const votes = await review.$relatedQuery('votes')
    const upVotes = votes.filter(vote => {
      return vote.voteType === 'upVote'
    })
    const downVotes = votes.filter(vote => {
      return vote.voteType === 'downVote'
    })
    const userVoteData = votes.find( vote => {
      return vote.userId == currentUserId
    })
    
    if (!userVoteData) {
      serializedReview.userVote = null
    } else {
      serializedReview.userVote = userVoteData.voteType
    }
    serializedReview.upVotes = upVotes.length
    serializedReview.downVotes = downVotes.length

    return serializedReview
  }
}

export default ReviewSerializer
