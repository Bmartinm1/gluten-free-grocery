class ReviewSerializer {
  static getSummary(review) {
    const allowedAttributes = ['rating', 'title', 'content']
    const serializedReview = {}

    for (const attribute of allowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }

    return serializedReview
  }
}

export default ReviewSerializer
