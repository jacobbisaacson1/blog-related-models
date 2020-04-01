require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT


// connect to db
require('./db/db')


// MIDDLEWARE
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) // urlencoded is for forms


// CONTROLLERS
const authorController = require('./controllers/authorController')
// the following line means for all URLs starting with /authors, 
// use the author controller, so 
// note: Inside of author controller, the routes will NOT 
// include '/authors' but they URLs will look the same to the client
app.use('/authors', authorController)



app.get('/', (req, res) => {
  res.render('home.ejs')
})

// a 404 route -- "*" is wildcard (or "glob") -- will match anything
app.get('*', (req, res) => {
  res.status(404).render('404.ejs')
})

app.listen(PORT, () => {
  // check this out
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  const d = new Date()
  console.log(`${d.toLocaleString()}: Server running on port ${PORT}`)
})