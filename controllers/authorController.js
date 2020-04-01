const express = require('express')
const router = express.Router()
const Author = require('../models/author')


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

  // Add author to db
  // we're just using req.body directly -- note that that means 
  // we are giving up a chance to modify it by declaring an intermediate object
  Author.create(req.body, (err, createdAuthor) => {
    if(err) {
      next(err)
    } else {
      console.log("\nhere's the author we created");
      console.log(createdAuthor);
      res.send('you hit post route -- check terminal')
    }
  })

})


// if you forget to export you will see:
// "expected a middleware function but got a Object" -- why? 
module.exports = router 