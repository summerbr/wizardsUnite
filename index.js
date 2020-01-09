const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const path = require('path')
const models = require('./models')
const app = express()
const bcrypt = require('bcrypt')
require('dotenv').config()

// create routers to cleanup code later
// const router = require('./routes/')
// app.use(router paths) upon cleanup

// PUBLIC folder for stylesheets /images
app.use(express.static('public'))
app.use(express.urlencoded())

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views','./views')
app.set('view engine','mustache')

app.get('/', (req,res) => {
  res.render('index')
})

app.get('/friend', (req,res) => {
  res.render('friend')
})

app.get('/friend/:friend', (req,res) => {
  res.render('friend',)
})

app.post('/loginUser', (req,res) => {
  const user = req.body.userName
  const password = req.body.password

  // bcrypt compare to loginuser
  // if successful, redirect to main account dashboard
})

app.post('/registerUser',(req,res) => {
  const name = req.body.name
  const password = req.body.password  
  const code = req.body.code
  const location = req.body.location
  const giftPref1 = req.body.giftPref1
  const giftPref2 = req.body.giftPref2

  console.log(name)
  console.log(code)
  console.log(location)
  console.log(giftPref1)
  console.log(giftPref2)
  
  //verify if user exists; if not bcrypt hash password
  const user = models.User.build({
    username: name,
    password: password,
    code: code,
    location: location,
    giftPref1: giftPref1,
    giftPref2: giftPref2
  })
  user.save().then(()=> { 
    res.redirect('/')
  })
})

app.get('/dashboard', (req,res) => {
  // display user friends
  // option to add new friend by code / username
  // search filter friend by giftPref / location
  // update gift preferences / location
  // logout
})

app.post('/add-friend',(req,res) => {
  const friendName = req.body.friendName
  const friendCode = req.body.friendCode

  console.log(friendName)
  console.log(friendCode)
  
  const friend = models.Friend.build({
    user: friendName,
    code: friendCode
  })
  friend.save().then(()=> { 
    res.redirect('/')
  })
})

app.listen(8080, () => {
  console.log('ACCIO Server...')
})