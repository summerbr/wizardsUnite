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

app.post('/add-friend',(req,res) => {
  const friendName = req.body.friendName
  const friendCode = req.body.friendCode

  console.log(friendName)
  console.log(friendCode)
  
  // const friend = models.Friend.build({
  //   user: friendName,
  //   code: friendCode
  // })
  // friend.save().then(()=> { 
    res.redirect('/')
  // })
})

app.listen(8080, () => {
  console.log('SERVER is RUNNING...')
})