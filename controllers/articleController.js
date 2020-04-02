const express = require('express')
const router = express.Router()
const Author = require('../models/author.js')
const Article = require('../models/article.js')


// index -- GET /articles
router.get('/', (req, res, next) => {
  // // a regular .find() will only return the article's author's ID, not name
  // using .popualte( <some path name that is a ref to an id> )

  // tells the computer - for this path, include the document in query results 
  // .exec() 
  Article.find({}).populate('author').exec((error, foundArticles) => {
    if(error) next(error)
    else {
      res.render('articles/index.ejs', {
        articles: foundArticles
      })    
    }
  })
})

// article new route - GET / articles/new
router.get('/new', (req, res, next) => {
  // want to show a dropdown menu of autors -- want to query the db to get authors -- require Author model
  Author.find({}, (error, foundAuthors) => {
    if(error) next(error)
    else {
      res.render('articles/new.ejs', { authors: foundAuthors })
    }
  })
})

// article create route: POST /articles
router.post('/', (req, res, next) => {
  // create the article
  Article.create(req.body, (err, createdArticle) => {
    if(err) next(err);
    else {
      // we will change this to redirect to index or show when we 
      // get those working in a minute
      res.redirect('/articles')
    }
  })
})

router.get('/:id', (req, res, next) => {
  Article.findById(req.params.id).populate("author").exec((error, foundArticle) => {
    if(error) next(error)
    else {
      res.render('articles/show.ejs', { article: foundArticle })
    }
  })
})

router.get('/:id/edit', (req, res, next) => {
  Article.findById(req.params.id).populate("author").exec((err, foundArticle) => {
    if(err) next(err)
    else {
      Author.find({}, (err2, foundAuthors) => {
        if(err2) next(err2)
        else {
          res.render('articles/edit.ejs', { 
            article: foundArticle,
            authors: foundAuthors 
          })
        }
      })
    }
  })
})

router.put('/:id', (req, res, next) => {
  updatedArticle = {
    author: req.body.author,
    title: req.body.title,
    body: req.body.body 
  }
  console.log(req.body);
  Article.findByIdAndUpdate(req.params.id, updatedArticle, (error, updatedArticle) => {
    if(error) next(error)
    else {
      res.redirect('/articles')
    }
  })
})

router.delete('/:id', (req, res, next) => {
  Article.findByIdAndRemove(req.params.id, (error, deletedAuthor) => {
    if(error) next(error)
    else {
      res.redirect('/articles')
    }
  })
})

module.exports = router


