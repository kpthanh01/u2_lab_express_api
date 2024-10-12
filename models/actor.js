const { Schema } = require('mongoose')

const Actor = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String, required: true },
  born: { type: Date, required: true },
  alive: { type: Boolean, required: true },
  movie_id: { type: Schema.Types.ObjectId, required: true }
})

module.exports = Actor