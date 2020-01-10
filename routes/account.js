const express = require('express')
const router = express.Router()

router.get('/dashboard', (req,res) => {
  res.render('dashboard')
})

// update account (fix!)
// app.post('/update-post', (req,res)=> {
//   const id = parseInt(req.body.id)
//   const title = req.body.title
//   const body = req.body.body
//   const category = req.body.category

//   models.Post.update({
//     title: title,
//     body: body,
//     category: category
//   },
//     {
//       where: {id: id} 
//     }
//   ).then(()=> {res.redirect('/')
//   })
// })

router.get('/logout', (req,res) => {
  req.session.destroy
  res.redirect('/')
})

module.exports = router