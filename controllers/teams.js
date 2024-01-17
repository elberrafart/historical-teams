const Team = require('../models/team'); 

const teamController = {
    show: async (req, res) => {
        try {
            const team = await Team.findById(req.params.id);
            res.render('team-details', { team });
        } catch (error) {
            res.send('Error encountered: ' + error);
        }
    },
    edit: async (req, res) => {
        try {
            const team = await Team.findById(req.params.id);
            res.render('edit-team', { team }); 
        } catch (error) {
            res.send('Error: ' + error);
        }
    },
    update: async (req, res) => {
        try {
            await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.redirect(`/teams/${req.params.id}`);
        } catch (error) {
            res.send('Error: ' + error);
        }
    },
    delete: async (req, res) => {
        try {
            await Team.findByIdAndDelete(req.params.id);
            res.redirect('/');
        } catch (error) {
            res.send('Error encountered: ' + error);
        }
    },
    addtrophy: async (req, res) => {
        try {
            await Team.findByIdAndUpdate(req.params.id, { $inc: { trophies: +1 } });
            res.redirect(`/teams/${req.params.id}`);
        } catch (error) {
            res.send('Error: ' + error);
        }
    },

    newNotablePlayer: async (req, res) => {
        try {
            const team = await Team.findById(req.params.id)
            res.render('new-player', { team })
        }
        catch (error) {            
            res.send(`Error: ${error}`)
        }
    },

    addPlayer: async (req, res) => {
        try {
            await Team.findByIdAndUpdate(req.params.id, {
                $push: { newNotablePlayer: req.body }
            });
            res.redirect(`/teams/${req.params.id}`); // Redirect after adding the review
        } catch (error) {
            res.send('Error encountered: ' + error);
        }
    }
}

module.exports = teamController;