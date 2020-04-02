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

router.get('/:id/edit', (req, res) => {
  Article.findById(req.params.id, (error, foundArticle) => {
    res.render('articles/edit.ejs', {article: foundArticle})
  })
})

router.put('/:id', (req, res, next) => {
  const updatedArticle = {
    author: req.body.author,
    title: req.body.title,
    body: req.body.body
  }
  Article.findByIdAndUpdate(req.params.id, updatedArticle, (err, updatedArticle) => {
    if(err) next(err)
    else {
      console.log(updatedArticle);
      res.redirect(`/article/${updatedArticle.id}`)
    }
  })
})

// router.get('/:id/edit', (req, res, next) => {
//   Article.findById(req.params.id).populate("article").exec((err, foundArticle) => {
//     if(err) next(err)
//     else {
//       Author.find({}, (err2, foundAuthors) => {
//         if(err2) next(err2)
//         else {
//           console.log("something213241");
//           Article.findByIdAndUpdate()
//             const updatedArticle = {
//               author: req.body.author,
//               title: req.body.title,
//               body: req.body.body 
//             }
//             console.log(updatedArticle); //showing up as an object with undefineds
//           //   res.render('articles/edit.ejs', { // need to make a author edit ejs
 
//           // })
//         }
//       })
//     }
//   })
// })

// router.put('/:id', (req, res, next) => {
//   Article.findByIdAndUpdate(req.params.id).populate("article").exec((err, updatedArticle) => {
//     if(err) next(err)
//     else {
//       console.log("article by id");
//       Article.find({}, (err, updatedArticle) => {
//         if(err) next(err)
//         else {
//           console.log("trying to update");
//         }
//       })
//     }
//   })
// })


//   console.log('something again');
//   Article.findByIdAndUpdate(
//     req.params.id,


//     req.body,
//     {new: true},
//     (err, updatedArticle) => {
//     if(err) next(err)
//     else {
//       res.redirect(`/articles/${updatedArticle._id}`)
//     }
//   })
// })

router.delete('/:id', (req, res, next) => {
  Article.findByIdAndRemove(req.params.id, (error, deletedAuthor) => {
    if(error) next(error)
    else {
      res.redirect('/articles')
    }
  })
})

module.exports = router


