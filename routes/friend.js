const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.get('/', (req,res) => {
  db.User.findAll().then((all) => 
    // TODO: return array without session user
    res.render('friendList', {all: all}))
})

router.get('/:id', (req,res) => {
  res.render('friend')
})

//Add friend from populated list
router.post('/add-friend',(req,res) => {
  const friendID = parseInt(req.body.id)
  
  const friend = db.Friend.build({
    userID: req.session.userID,
    id: friendID
  })
  friend.save().then(()=> { 
    res.redirect('/user/dashboard')
  })
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

module.exports = router