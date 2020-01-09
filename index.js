const express = require('express')
const mustacheExpress = require('mustache-express')
const models = require('./models')
// require('dotenv').config()

const app = express()
app.use(express.urlencoded())

const path = require('path')
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

app.post('/register',(req,res) => {
  const userName = req.body.friendName
  const userCode = req.body.friendCode
  const location = req.body.location
  const giftPref1 = req.body.giftPref1
  const giftPref2 = req.body.giftPref2

  console.log(userName)
  console.log(userCode)
  console.log(location)
  console.log(giftPref1)
  console.log(giftPref2)
  
  // const friend = models.Friend.build({
  //   user: friendName,
  //   code: friendCode
  // })
  // friend.save().then(()=> { 
    res.redirect('/')
  // })
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
  console.log('SERVER is RUNNING...')
})