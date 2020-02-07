const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.get('/', (req,res) => {
  res.render('friend')
})

router.get('/:id', (req,res) => {
  res.render('friend')
})

//add friend
router.post('/add-friend',(req,res) => {
  // const friendName = req.body.friendName
  // const friendCode = req.body.friendCode
  
  // const friend = db.Friend.build({
  //   userID: req.session.userID,
  //   username: friendName,
  //   code: friendCode
  // })
  // friend.save().then(()=> { 
  //   res.redirect('/user/dashboard')
  // })

  db.User.findAll().then((all) => {
    res.render('dashboard', {all: all} 
    )
  })
})

//remove friend
router.post('/remove-friend', (req,res)=> {
  let byeFelicia = parseInt(req.body.id)
  
  db.Friend.destroy(
    {
      where: {id: byeFelicia}
    }
  ).then(removedFriend => console.log(removedFriend))
  res.redirect('/user/dashboard')
})

  // show all registered users?

  // db.User.findAll().then((all) => {
  //   res.render('dashboard', {all:all} exclude loggedIn user
  //   )
  // })

//not working yet
router.post('/search', (req,res) => {
  //by username
  const userSearch = req.body.search
  db.User.findOne(
    {
      where: {username: userSearch}
    }
  ).then(friend => console.log(friend))
  //by location

  //by giftPref
})

module.exports = router