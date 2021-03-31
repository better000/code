const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: { type: String },
  cate: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  body: { type: String }
}, {
  timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article