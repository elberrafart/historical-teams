// Require the Mongoose package
const mongoose = require('mongoose');

//Schema for teamPlayer

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true},
    countryName: { type: String, required: true},
    photo: String,
    trophies: { type: String, required: true},
    age: { type: Number, required: true},
    active: { type: Boolean, required: true },
})


module.exports = mongoose.model('player', playerSchema);
