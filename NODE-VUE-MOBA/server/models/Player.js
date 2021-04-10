const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  credit: { type: Number, default: 0 }
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player