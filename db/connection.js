const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fortniteblog')
mongoose.Promise = Promise
module.exports = mongoose
