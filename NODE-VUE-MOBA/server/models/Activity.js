const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  cate: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  title: { type: String },
  reward: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  enddate: { type: String }
}, {
  timestamps: true
})

const Activity = mongoose.model('Activity', articleSchema)

module.exports = Activity