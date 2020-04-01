const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  body: {
    type: String,
    required: true
  }, 
  posted: {
    type: Date,
    default: Date.now // automatically set on document creation
  },
  // in mongoose you can have a path (field) that is a REFERENCE
  // to another document in another collection in the db
  author: {
    // ObjectId is a data type allowed by BSON
    type: mongoose.Schema.Types.ObjectId,

    // model you are referring to
    // use the exact same string you used in the mongoose.model() statement
    // in the model you are referencing
    ref: 'Author'
  }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article