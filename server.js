require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT


app.get('/', (req, res) => {
  res.render('home.ejs')
})


app.listen(PORT, () => {
  // check this out
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  const d = new Date()
  console.log(`${d.toLocaleString()}: Server running on port ${PORT}`)
})