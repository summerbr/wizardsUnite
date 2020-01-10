const express = require('express')
const router = express.Router()

//friends/

//add friend
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
    res.redirect('/dashboard')
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
  res.redirect('/dashboard')
})

module.exports = router