const { Schema, model } = require('mongoose')

require('../models/Celebrity.model')

let movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,
        ref: 'Celebrity'
    }]
});

let MovieModel = model('Movies', movieSchema)

module.exports = MovieModel;