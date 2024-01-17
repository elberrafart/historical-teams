// Entry Point to the website where I can configure my application

/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const Team = require('./models/team')
const seedTeams = require('./models/seed')
// Add delete request functionality
const methodOverride = require('method-override');

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');
const teamController = require('./controllers/teams');

/* Initialize the Express app
--------------------------------------------------------------- */
const app = express();

/* Configure EJS app as view engine(app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Set up middleware to server static files and override methods
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

/* Home route - displays all teams
--------------------------------------------------------------- */
app.get('/', async function(req, res) {
    try {
        const teams = await Team.find({});
        res.render('home', { teams });
    }
    catch(error) {
        res.send(`Error: ${error}`);
    }
})

app.get('/home', function(req, res) {
    res.redirect('/');
});


/* ------------About route - leads to display page-------------------------- */
app.get('/about', async function(req, res) {
    try {
        const teams = await Team.find({});
        res.render('about', { teams });
    }
    catch(error) {
        res.send(`Error: ${error}`)
    }
})

/*-------- Teams route - displays all teams in teams gallery page ----------- */
app.get(`/teams`, async function (req, res) {
    try {
        const teams = await Team.find({});
        res.render('teams', { teams })
    }
    catch(error) {
        res.send(`Error: ${error}`)
    }
})

/*-------------- Routes to go to new team form -------------*/
app.get(`/teams/new`, async function(req, res) {
    try {
        const teams = await Team.find({});
        res.render('new-team', {teams})
    }
    catch(error) {
        res.send(`Error: ${error}`)
    }
})

/*-------------- Routes to post a to new team  -------------*/
app.post('/teams', async function(req, res) {
    try {
        const newTeam = await Team.create(req.body);
        res.redirect(`/teams/${newTeam._id}`);
    } catch (error) {
        res.send('Error encountered: ' + error);
    }
});

/*-------------- Routes to controller  ------------------*/
app.get('/teams/:id', teamController.show); // show team details
app.get('/teams/:id/edit', teamController.edit); // edit team details form
app.put('/teams/:id', teamController.update) // update team details from update
app.delete('/teams/:id', teamController.delete); // delete team
app.put('/teams/:id/addtrophy', teamController.addtrophy) // add trophy
app.get('/teams/:id/new-player', teamController.newNotablePlayer) // go to notable player form
app.post('/teams/:id/new-player', teamController.addPlayer); // add new notable player

// Seed Route to populate the database with seed data
app.get('/seed', async(req, res) => {
    try {
        await Team.deleteMany({});
        await Team.insertMany(seedTeams);
        res.send('Database seeded')
    }
    catch (error) {
        res.send(`Error seeding database: ${error}`)
    }
})

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
