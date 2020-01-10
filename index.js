const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const path = require('path')
const db = require('./models')
const app = express()
const bcrypt = require('bcrypt')
const saltRounds = 10
// const router = require('./routes/')
require('dotenv').config()

// PUBLIC folder for stylesheets /images
app.use(express.static('public'))
app.use(express.urlencoded())

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views','./views')
app.set('view engine','mustache')

app.use(session({
    secret:"Shhh! stupid",
    resave: false,
    saveUninitialized: true
}))

// create routers to cleanup code later
// app.use(router paths) 

app.get('/', (req,res) => {
  res.render('index')
})

app.get('/register', (req,res) => {
  res.render('register')
})

app.get('/friend', (req,res) => {
  res.render('friend')
})

app.get('/friend/:friend', (req,res) => {
  res.render('friend',)
})

app.post('/loginUser', (req,res) => {
  db.User.findOne({
    where: {
      username: req.body.userName
    }
  }).then((user) => {
      if (!user) {
        // msg doesn't work -- update later
        res.redirect('/', {status:500, message: 'user already exists'})
      } else {
        // bcrypt compare to loginuser
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          // if successful, redirect to main account dashboard
          if (result == true) {
            req.session.userID = user.id
            console.log(req.session)
            // console.log(req.session.userID)
            res.redirect('/dashboard');
          } else {
              console.log('password WRONG')
              // res.send('Try again');
              res.redirect('/')
          }
        })
      }
    })
});

app.get('/dashboard', (req,res) => {
  res.render('dashboard')
})

app.post('/registerUser',(req,res) => {
  const name = req.body.name
  const password = req.body.password  
  const code = req.body.code
  const location = req.body.location
  const giftPref1 = req.body.giftPref1
  const giftPref2 = req.body.giftPref2

  //verify if user exists; if not bcrypt hash password
  db.User.findOne({
    where: {
      username: name
    }
  }).then((user) => {
      if (user) {
        res.redirect('/', {status:500, message: 'user already exists'})
      } else {
        bcrypt.hash(password, saltRounds, function(err,hash) {
          const user = db.User.build({
            username: name,
            password: hash,
            code: code,
            location: location,
            giftPref1: giftPref1,
            giftPref2: giftPref2
          })
          user.save().then(()=> { 
            res.redirect('/')
          })
        })
      }
  })
})

app.get('/dashboard', (req,res) => {
  // only available when logged in -- active session
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
  
  const friend = db.Friend.build({
    userID: req.session.userID,
    username: friendName,
    code: friendCode
  })
  friend.save().then(()=> { 
    res.redirect('/')
  })
})

app.listen(8080, () => {
  console.log('ACCIO Server...')
});