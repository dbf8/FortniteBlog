const express = require('express')
const hbs = require('hbs')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Blog = require('./models/Blog')
const blogController = require('./controllers/blog')

const app = express()

app.use(methodOverride('_method'))
// view engine setup
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', index)
// app.use('/users', users)

app.get('/', (req, res) => {
  Blog.find({}).then(blog => {
    res.render('index', { blog })
  })
})

app.use('/blog', blogController)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// module.exports = app

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`supsup, sup sup port: ${app.get('port')}`)
})
