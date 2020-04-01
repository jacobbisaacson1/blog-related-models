const express = require('express')
const router = express.Router()
const Author = require('../models/author.js')
const Article = require('../models/article.js')


// article index route: GET /articles
router.get('/', (req, res, next) => {
  // get the articles
  // Article.find({}, (err, foundArticles) => {
  //   if(err) next(err);
  //   else {
  //     // observe: a regular .find() on Articles gives us 
  //     // article documents that just contain the Author's id (ObjectId)
  //     console.log("\nhere are the articles we found");
  //     console.log(foundArticles);
  //     res.send('check terminal')
  //   }
  // })

  // .populate(some path name that is a ref to an ID)
  // this modifies the find query 
  // for this path, go get the actual document for this id
  // include the actual document in the query results instead of just the id

  // so in this case it means "give me actual Author documents"
  // instead of just IDs of Author documents
  Article.find({}).populate('author').exec((err, foundArticles) => {
    if(err) next(err);
    else {
      console.log("\nhere are the articles we found using .populate('author')");
      console.log(foundArticles);
      res.send('check terminal')
    }
  })
}) // index route


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

// article create route: POST /articles
router.post('/', (req, res, next) => {
  // create the article
  Article.create(req.body, (err, createdArticle) => {
    if(err) next(err);
    else {
      // we will change this to redirect to index or show when we 
      // get those working in a minute
      res.send(createdArticle)
    }
  })
})

module.exports = router