const express = require('express')
const router = express.Router()
const Author = require('../models/author.js')

// article new route: GET /articles/new
router.get('/new', (req, res, next) => {
  // we want to show a dropdown on the article new page
  // to let user choose an author
  // so we must query the db to get the authors
  Author.find({}, (err, foundAuthors) => {
    if(err) next(err);
    else {
      // be sure to make the authors available to the template!
      res.render('articles/new.ejs', {
        authors: foundAuthors
      })
    }
  })
})

module.exports = router