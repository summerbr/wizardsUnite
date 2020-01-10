const express = require('express')
const router = express.Router()

//friends/
// router.get('/', (req,res) => {
//   res.render('friends', {myFriends: myFriends} )
// })

// router.post('/addFriend', (req,res) => {
//   let trip = {
//     'city': req.body.myCity,
//     'departureDate': req.body.myDeparture,
//     'returnDate': req.body.myReturn,
//     'imgURL': req.body.myImg
//   }
//   myTrips.push(trip)
//   res.redirect('/trips')
// })

// router.post('/removeFriend', (req,res) => {
//   let cityToRemove = req.body.cityToRemove
//   myTrips = myTrips.filter((trip) => {
//     if(trip.city != cityToRemove) {
//       return trip
//     }
//   })
//     res.redirect('/trips')
// })

module.exports = router