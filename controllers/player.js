const Player = require('../models/player')

const playerController = {
    show: async (req, res) => {
        try {
            const allPlayers = await Player.find({})
            res.render('team-details', { allPlayers })
        } catch(error) {
            res.send('Error encountered: ' + error);
        }
    }
}

module.exports = playerController