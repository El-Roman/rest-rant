const router = require('express').Router()

// NEW /places
router.get('/new', (req, res) => {
    res.render('places/new')
})


// POST
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})


// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Office Coffee and Cocktails',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Coffee/ Cocktails',
        pic: '/images/coffee-shop.jpg'
    }, {
        name: 'Tokyo Ramen',
        city: 'New York',
        state: 'NY',
        cuisines: 'Asian Cuisine',
        pic: '/images/tokyo-ramen.jpg'
    }]

    res.render('places/index', { places })
})

module.exports = router