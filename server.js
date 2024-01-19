// Entry Point to the website where I can configure my application

/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const Team = require('./models/team')
const Player = require('./models/player')
const seedTeams = require('./models/seed')
// Add delete request functionality
const methodOverride = require('method-override');

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');
const teamController = require('./controllers/teams');
const playerController = require('./controllers/player')

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
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));



// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
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
        res.send(`Error: ${error}`);
    }
});


/*-------------- Routes to create a new player  -------------*/
app.post('/players', async function(req, res) {
    try {
        await Player.create(req.body);
        const teamId = req.body.teamId; // Retrieve the team ID from the form
        res.redirect(`/teams/${teamId}`);
    } catch (error) {
        res.send(`Error: ${error}`);
    }
});


/*-------------- Routes to post an existing player  -------------*/
app.post('/teams/:teamId/add-player', async function(req, res) {
    try {
        const teamId = req.params.teamId;
        const playerId = req.body.selectedPlayer; // Get player ID from the form data
        const team = await Team.findById(teamId);
        team.players.push(playerId);
        await team.save();
        res.redirect(`/teams/${teamId}`);
    } catch(error) {
        res.send(`Error: ${error}`);
    }
});



/*-------------- Routes to team controller  ------------------*/
app.get('/teams/:id', teamController.show); // show team details
app.get('/teams/:id/edit', teamController.edit); // edit team details form
app.put('/teams/:id', teamController.update) // update team details from update
app.delete('/teams/:id', teamController.delete); // delete team
app.put('/teams/:id/addtrophy', teamController.addtrophy) // add trophy
app.get('/teams/:id/new-player', teamController.newNotablePlayer) // go to notable player form
app.post('/teams/:id/new-player', teamController.addPlayer); // add new notable player


/*-------------- Routes to player controller  ------------------*/
app.get('/player', playerController.show)

// Seed Route to populate the database with seed data
if (process.env.ON_HEROKU === 'false'){
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
}


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
