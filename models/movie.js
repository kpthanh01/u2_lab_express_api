const { Schema } = require('mongoose')

const Movie = new Schema({
  title: { type: String, required: true },
  runtime: { type: String, required: true },
  rating: { type: Number, required: true },
  poster_img: { type: String, required: true },
  year_released: { type: String, required: true },
  description: { type: String, required: true },
})

module.exports = Movie