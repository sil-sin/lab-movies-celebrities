const router = require("express").Router();

/* GET home page */
let CelebModel = require('../models/Celebrity.model')

router.get("/celebrities/create", (req, res, next) => {

    res.render('celebrities/new-celebrity.hbs')

})

router.post('/celebrities/create', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    CelebModel.create({ name, occupation, catchPhrase })
        .then((data) => {
            console.log('Celebrity created')
            res.redirect('/celebrities')
        })
        .catch((err) => {
            console.log(err)
        });
})

// read
router.get('/celebrities', (req, res, next) => {
    CelebModel.find()
        .then((allCelebs) => {
            res.render('celebrities/celebrities.hbs', { allCelebs })
        }).catch((err) => {
            console.log(err)
        });
})




module.exports = router;
