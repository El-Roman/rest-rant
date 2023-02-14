const router = require('express').Router()



// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Office Coffe and Cocktails',
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