// importing our dependencies
const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')

// define our routes

// get all blog posts: '/'

// create new blog: '/'
router.post('/', (req, res) => {
  Blog.create(req.body).then(blog => {
    res.redirect(`/blog/${blog.id}`)
  })
})

// get new view for a new blog
router.get('/new', (req, res) => {
  res.render('blog/new')
})

// get a blog by it's id: '/:id'
router.get('/:id', (req, res) => {
  Blog.findOne({ _id: req.params.id }).then(blog => {
    res.render('blog/show', blog)
  })
})
// update a blog by id: '/:id'
router.get('/edit/:id', (req, res) => {
  Blog.findOne({ _id: req.params.id }).then(blog => {
    res.render('blog/edit', blog)
  })
})

router.put('/:id', (req, res) => {
  Blog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    Blog => {
      res.redirect('/')
    }
  )
})

// delete a blog by id: '/:id'
router.delete('/:id', (req, res) => {
  Blog.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect('/')
  })
})

// export our router (then import in index.js)
module.exports = router
