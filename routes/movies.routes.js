const router = require("express").Router();

/* GET home page */
const MovieModel = require('../models/Movie.model');
const CelebModel = require('../models/Celebrity.model')


router.get("/movies/create", (req, res, next) => {

    CelebModel.find()
        .then((data) => {

            res.render('movies/new-movie.hbs', { data })
        })
        .catch((err) => {
            console.log(err)
        });
})

router.post('/movies/create', (req, res, next) => {

    const { title, genre, plot, cast } = req.body

    MovieModel.create({ title, genre, plot, cast })
        .then((response) => {
            console.log('Movie Created !')
            res.redirect('/movies')
        })
        .catch((err) => {

        });
})

router.get('/movies', (req, res, next) => {
    MovieModel.find()
        .then((allMovies) => {
            res.render('movies/movies.hbs', { allMovies })
        }).catch((err) => {

        });
})

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params
    MovieModel.findById(id)

        .populate("cast")
        .then((data) => {
            console.log(data)
            // let cast = data.cast
            res.render('movies/movie-details.hbs', { data })
        })
        .catch((err) => {

        });
})

router.post("/movies/:id/delete", (req, rs, next) => {
    const { id } = req.params
    MovieModel.findByIdAndDelete(id)
        .then((movie) => {
            res.redirect('/movies', { movie })
        }).catch((err) => {

        });
})




module.exports = router;
