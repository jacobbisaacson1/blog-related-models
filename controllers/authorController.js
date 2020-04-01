const express = require('express')
const router = express.Router()


// NOTE! REMINDER! we don't need '/authors' in these URLS
// requests to /authors/..... will come into this controller
// because of how we linked it up in server.js
// so we will just have the part of the URL that comes after 
// /authors (even though client will send requests to the same 
// URLs as before)


router.get('/', (req, res) => {
  res.send('Authors controller working')
})

// author new route: GET /authors/new 
router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

// author create route: POST /authors
router.post('/', (req, res, next) => {
  res.send('you hit post route')
})


// if you forget to export you will see:
// "expected a middleware function but got a Object" -- why? 
module.exports = router 