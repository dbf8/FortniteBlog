// importing our dependencies
const express = require('express')
const router = express.Router()
const Joke = require('../models/Joke')

// define our routes

// get all jokes: '/'

// create new joke: '/'
router.post('/', (req, res) => {
  Joke.create(req.body).then(joke => {
    res.redirect(`/jokes/${joke.id}`)
  })
})

// get new view for a new joke
router.get('/new', (req, res) => {
  res.render('joke/new')
})

// get a joke by it's id: '/:id'
router.get('/:id', (req, res) => {
  Joke.findOne({ _id: req.params.id }).then(joke => {
    res.render('joke/show', joke)
  })
})
// update a joke by id: '/:id'

// delete a joke by id: '/:id'

// export our router (then import in index.js)
module.exports = router
