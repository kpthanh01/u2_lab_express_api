const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
  const movies = await Movie.find({})
  res.send(movies)
}


module.exports = {
  getAllMovies
}