const express = require('express')
const router = express.Router()
const Author = require('../models/author')


// NOTE! REMINDER! we don't need '/authors' in these URLS
// requests to /authors/..... will come into this controller
// because of how we linked it up in server.js
// so we will just have the part of the URL that comes after 
// /authors (even though client will send requests to the same 
// URLs as before)


// author index: GET /authors
router.get('/', (req, res, next) => {

  // get ALL the authors from the db
  Author.find({}, (err, foundAuthors) => {
    if(err) {
      // pass the error to express to deal with
      next(err)
    } else {
      // render them in a template
      res.render('authors/index.ejs', {
        authors: foundAuthors
      })
    }
  })

})

// author new route: GET /authors/new 
router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

// author show route: GET /authors/:id -- info for ONE author
router.get('/:id', (req, res, next) => {
  Author.findById(req.params.id, (err, foundAuthor) => {
    if(err) next(err);
    else {
      res.render('authors/show.ejs', {
        author: foundAuthor
      })
    }
  })
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
      // send them to the index so they can see that the author was added
      res.redirect('/authors')
    }
  })

})

// author destroy route: DELETE /authors/:id
router.delete('/:id', (req, res, next) => {
  Author.findByIdAndRemove(req.params.id, (err, deletedAuthor) => {
    if(err) next(err);
    else {
      // so they can see that author was deleted
      res.redirect('/authors')
    }
  })
})


// if you forget to export you will see:
// "expected a middleware function but got a Object" -- why? 
module.exports = router 