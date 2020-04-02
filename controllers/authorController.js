const express = require('express')
const router = express.Router()
const Author = require('../models/author')
const Article = require('../models/article.js')


// NOTE! REMINDER! we don't need '/authors' in these URLS
// requests to /authors/..... will come into this controller
// because of how we linked it up in server.js
// so we will just have the part of the URL that comes after 
// /authors (even though client will send requests to the same 
// URLs as before) 


router.get('/', (req, res, next) => {
  // get authors from db
  Author.find({}, (err, foundAuthors) => {
    if(err) next(err)
    else {
      // render them into template
      res.render('authors/index.ejs', {
        authors: foundAuthors,
      })
    }
  })
})


router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

// 4 show route
router.get('/:id', (req, res, next) => {
  Author.findById(req.params.id, (err, foundAuthor) => {
    if(err) next(err)
    else {
      Article.find({author: req.params.id}, (err2, foundArticles) => {
        if(err2) next(err2)
        else {  
          res.render('authors/show.ejs', {
            author: foundAuthor,
            articles: foundArticles
          })
        }
      })
    }
  })
})

router.post('/', (req, res, next) => {
  // add author to db
  Author.create(req.body, (err, createdAuthor) => {
    if(err) next(err)
    else {
      res.redirect('/authors')
    }
  })
})


router.delete('/:id', (req, res, next) => {
  Author.findByIdAndRemove(req.params.id, (err, deletedAuthor) => {
    if(err) next(err)
    else {
      Article.remove({author: req.params.id}, (err, result) => {
        if(err) next(err)
        else {
          console.log(result);
          res.redirect('/authors')
        }
      })
    }
  })
})

router.get('/:id/edit', (req, res) => {
  Author.findById(req.params.id, (error, foundAuthor) => {
    res.render('authors/edit.ejs', {author: foundAuthor})
  })
})

// 7 put route
router.put('/:id', (req, res, next) => {
  const updatedAuthor = {
    name: req.body.name
  }
  Author.findByIdAndUpdate(req.params.id, updatedAuthor, (err, updatedAuthor) => {
    if(err) next(err)
    else {
      console.log(updatedAuthor);
      res.redirect(`/authors/${updatedAuthor.id}`)
    }
  })
})



// if you forget to export you will see:
// "expected a middleware function but got a Object" -- why? 
module.exports = router 