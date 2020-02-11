const express = require('express')
const app = express()
require('dotenv').config()

global.db = require('./models')
global.userList = []

const path = require('path')
const mustacheExpress = require('mustache-express')
const VIEWS_PATH = path.join(__dirname, '/views')
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views','./views')
app.set('view engine','mustache')

// PUBLIC folder for stylesheets /images
app.use(express.static('public'))
app.use(express.urlencoded())

const session = require('express-session')
app.use(session({
    secret:"Shhh! stupid. He is the boy who lived",
    resave: false,
    saveUninitialized: true
}))

const userRouter = require('./routes/user')
const friendRouter = require('./routes/friend')
app.use('/user', userRouter) 
app.use('/friend', friendRouter)

app.get('/', (req,res) => {
  res.render('index')
})

app.get('/register', (req,res) => {
  res.render('register')
})

app.listen(8080, () => {
  console.log('ACCIO Server...')
});