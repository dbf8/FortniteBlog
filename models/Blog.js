// Import DB connection
const mongoose = require('../db/connection')

// Create a new schema
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  writeup: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  author: String,
  youtubevideo: {
    type: String,
    required: true
  }
})

// Giving mongoose the schema to build the model
const Blog = mongoose.model('Blog', BlogSchema)

// exporting the Blog model
module.exports = Blog
