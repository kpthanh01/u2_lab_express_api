const { Schema } = require('mongoose')

const Review = new Schema({
  movie_id: { type: Schema.Types.ObjectId, required: true },
  date: {type: Date, required: true},
  score: { type: Number, required: true },
  comment: { type: String, required: true },
})

module.exports = Review