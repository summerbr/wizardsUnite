const express = require('express')
const router = express.Router()

router.get('/dashboard', (req,res) => {
  res.render('dashboard')
})

router.get('/logout', (req,res) => {
  req.session.destroy
  res.redirect('/')
})

module.exports = router