// Entry Point to the website where I can configure my application

/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const Team = require('./models/team')
const seedProducts = require('./models/seed')
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

/* Home route -displays all products
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

// Route to display form for adding a new team

// app.get('/products/new', function(req, res) {
//     res.render('new-product');
// });

// Route to handle create a new team
// app.post('/products', async function(req, res) {
//     try {
//         const newProduct = await Product.create(req.body);
//         res.redirect(`/products/${newProduct._id}`);
//     } catch (error) {
//         res.send('Error encountered: ' + error);
//     }
// });

// Route to delete a team
// app.delete('/products/:id', productController.delete);

// Route to add a new player
// app.post('/products/:id/reviews', productController.addReview)

/* Controller routes for team
--------------------------------------------------------------- */
//app.get('/products/:id', productController.show) // show product details
//app.get('/products/:id/edit', productController.edit); // edit product
//app.put('/products/:id', productController.update); // update product
//app.post('/products/:id/purchase', productController.purchase); // purchase product
//app.get('/products/:productId/reviews/new', productController.newReview); // add new review

// Seed Route to populate the database with initial data
app.get('/seed', async(req, res) => {
    try {
        await Team.deleteMany({});
        await Team.insertMany(seedProducts);
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
