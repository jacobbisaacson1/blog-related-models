require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.static('public'))



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