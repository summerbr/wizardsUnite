const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.render('friend')
})

router.get('/:id', (req,res) => {
  res.render('friend')
})

//add friend
router.post('/add-friend',(req,res) => {
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

router.post('/search', (req,res) => {
  db.User.findOne({
    where: {
      username: name
    }
  }).then((friend) => {
    
  })
})

module.exports = router