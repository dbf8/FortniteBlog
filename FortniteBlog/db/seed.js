const Blog = require('../models/Blog')

Blog.remove({}).then(() => {
  Promise.all([
    Blog.create({
      title: 'Why did the golfer wear 2 pairs of pants?',
      writeup: 'In case he got a hole in one',
      video: ''
    })
  ]).then(() => {
    console.log('done')
    process.exit()
  })
})
