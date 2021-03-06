const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

router.use(express.static('public'))

router.get('/dashboard', (req,res) => {
  // only available when logged in -- active session
  // display user friends
  const username = req.session.userName
  
  db.Friend.findAll(
    {
      include: [
        {
          model: db.User, 
          as: 'user'
        }
      ], 
      where: {
        userID: req.session.userID
      }
    }
  ).then((friends) => {
    friends.forEach(f => console.log(f.user))
    res.render('dashboard', {username: req.session.name, friends: friends})
  })
})

router.post('/register',(req,res) => {
  const name = req.body.name
  const password = req.body.password  
  const code = req.body.code
  const location = req.body.location
  const house = req.body.house
  const profession = req.body.profession
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
            house: house,
            profession: profession,
            giftPref1: giftPref1,
            giftPref2: giftPref2
          })
          user.save().then(()=> { 
            res.redirect('/user/login')
          })
        })
      }
  })
})

router.post('/login', (req,res) => {
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
            req.session.name = user.username
            
            console.log(req.session)
            res.redirect('./dashboard')
          } else {
              console.log('WRONG password')
              res.redirect('/')
          }
        })
      }
    })
});

// update account / gift preferences / location
router.put('/update', (req,res)=> {
  const id = parseInt(req.body.id)
  const location = req.body.location
  const house = req.body.house
  const profession = req.body.profession
  const giftPref1 = req.body.giftPref1
  const giftPref2 = req.body.giftPref2

  db.User.update({
    location: location,
    house: house,
    profession: profession,
    giftPref1: giftPref1,
    giftPref2: giftPref2
  },
    {
      where: {id: id} 
    }
  ).then(()=> {res.redirect('./dashboard')
  })
})

router.get('/logout', (req,res) => {
  console.log('byeeeeeeee')
  req.session.destroy
  res.redirect('/')
})

module.exports = router