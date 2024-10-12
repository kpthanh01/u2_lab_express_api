const { Review } = require('../models')

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({})
  res.send(reviews)
}

const getReviewById = async (req, res) => {
  const { id } = req.params
  const review = await Review.findById(id)
  res.send(review)
}

module.exports = {
  getAllReviews,
  getReviewById
}