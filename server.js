const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
// Write Require Controllers
const movieController = require('./controllers/movieController.js')
const actorController = require('./controllers/actorController.js')
const reviewController = require('./controllers/reviewController.js')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is the Root!')
})

app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)

app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})