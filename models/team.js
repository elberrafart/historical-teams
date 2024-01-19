// Require the Mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a schema for team
const teamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    teamLogo: { type: String },
    nickName: { type: String },
    yearFounded: { type: Number, required: true },
    trophies: { type: Number, required: true},
    players: [{ type: Schema.Types.ObjectId, ref: 'player' }]
});

module.exports = mongoose.model('team', teamSchema);
