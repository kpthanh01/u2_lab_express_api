const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
  const movies = await Movie.find({})
  res.send(movies)
}

const getMovieById = async (req, res) => {
  const { id } = req.params
  const movie = await Movie.findById(id)
  res.send(movie)
}

module.exports = {
  getAllMovies,
  getMovieById
}