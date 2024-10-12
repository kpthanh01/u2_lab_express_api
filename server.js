const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
// Write Require Controllers
const movies = require('./controllers/movieController.js')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is the Root!')
})

app.get('/movies', movies.getAllMovies)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})