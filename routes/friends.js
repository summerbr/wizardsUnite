const express = require('express')
const router = express.Router()

//friends/
// router.get('/', (req,res) => {
//   res.render('friends', {myFriends: myFriends} )
// })

// router.post('/remove-friend', (req,res)=> {
//   let byeFelicia = parseInt(req.body.id)
  
//   db.Post.destroy(
//     {
//       where: {id: byeFelicia}
//     }
//   ).then(removedFriend => console.log(removedFriend))
//   res.redirect('/dashboard')
// })

module.exports = router