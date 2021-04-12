const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  applicant: { type: mongoose.SchemaTypes.ObjectId, ref: 'Player' },
  type: { type: String },
  status: { type: Number, default: 0 },
  material: { type: String },
  feedback: { type: String },
  handle: { type: String }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order