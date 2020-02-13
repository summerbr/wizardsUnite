const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.get('/', (req,res) => {
  db.User.findAll().then((all) => 
    // TODO: return array without session user
    res.render('friendList', {all: all}))
})

//Add friend from registered users table
router.post('/add-friend',(req,res) => {
  //id should link to user in table; now it links to logged in user

  const friendID = parseInt(req.body.friendID)
  console.log(friendID)
  const friend = db.Friend.build({
    userID: req.session.userID,
    friendID: friendID  
  })
  friend.save().then(()=> { 
    res.redirect('/user/dashboard')
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

//TODO 
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

router.get('/:id', (req,res) => {
  res.render('friend')
})

module.exports = router