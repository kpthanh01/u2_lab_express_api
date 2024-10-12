const { Actor } = require('../models')

const getAllActors = async (req, res) => {
  const actors = await Actor.find({})
  res.send(actors)
}

const getActorById = async (req, res) => {
  const { id } = req.params
  const actor = await Actor.findById(id)
  res.send(actor)
}

module.exports = {
  getAllActors,
  getActorById
}