const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://kphamthanh01:Pokemon123!@cluster0.6nzlj.mongodb.net/moviesDatabase')
  .then(() => {
    console.log('Successfully connect to MongoDB')
  })
  .catch(e => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db