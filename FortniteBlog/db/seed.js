const Blog = require('../models/Blog')

Blog.remove({}).then(() => {
  Promise.all([
    Blog.create({
      title: 'A Fortnite of Fortnite',
      writeup:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum commodo rhoncus. Quisque fermentum quam ornare, pellentesque nunc non, tincidunt diam. Nulla auctor felis leo. Morbi pharetra rutrum leo vitae facilisis. Curabitur quis odio vel orci molestie aliquam. Duis elementum diam id nibh cursus eleifend. Integer porta metus quam, id maximus odio pretium vel. Aenean auctor, ligula nec accumsan molestie, lacus justo fringilla felis, eu fringilla mauris eros ac dolor. Fusce cursus nulla non ex varius pretium. Mauris ut bibendum orci.',
      video: ''
    })
  ]).then(() => {
    console.log('done')
    process.exit()
  })
})
