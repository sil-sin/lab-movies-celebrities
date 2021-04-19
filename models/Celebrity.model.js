const { Schema, model } = require('mongoose')

let celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
});

let CelebModel = model('Celebrity', celebSchema)

module.exports = CelebModel;