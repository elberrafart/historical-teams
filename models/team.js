// Require the Mongoose package
const mongoose = require('mongoose');

//Schema for teamPlayer

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true},
    teamName: { type: String, required: true},
    trophies: { type: String, required: true},
    age: { type: Number, required: true},
    active: { type: Boolean, required: true },
})

// Create a schema for team
const teamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    teamLogo: { type: String, required: false },
    nickName: { type: String },
    yearFounded: { type: Number, required: true },
    trophies: { type: Number, required: true},
    notablePlayers: {
        type: [playerSchema],
        required: false,
        default: []
    }
});

module.exports = mongoose.model('team', teamSchema);
