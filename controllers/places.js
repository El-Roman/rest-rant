const router = require('express').Router()
const places = require('../models/places.js')

// NEW /places
router.get('/new', (req, res) => {
    res.render('places/new')
})


// POST
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})



// GET /places
router.get('/', (req, res) => {
    // let places = [{
    //     name: 'Office Coffee and Cocktails',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Coffee/ Cocktails',
    //     pic: '/images/coffee-shop.jpg'
    // }, {
    //     name: 'Tokyo Ramen',
    //     city: 'New York',
    //     state: 'NY',
    //     cuisines: 'Asian Cuisine',
    //     pic: '/images/tokyo-ramen.jpg'
    // }]

    res.render('places/index', { places })
})

module.exports = router