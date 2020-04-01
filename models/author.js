const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  // remember these properties in the Schema are called PATHS
  name: {
    type: String,
    required: true
  }
})

// the first argument here is where the name of the collection
// in mongodb comes from
// make sure it is singular uppercase
const Author = mongoose.model('Author', authorSchema)

// if you forget this you might an error like
// ".create()/.find()/.findById() etc 
// is not a method on undefined" (or null)
module.exports = Author