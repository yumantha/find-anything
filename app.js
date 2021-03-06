const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log("Connected to database " + config.database);
});

//on error
mongoose.connection.on('error', (err) => {
    console.log("Database error: " + err);
});

const app = express();

const users = require('./routes/users');
const items = require('./routes/items');
const services = require('./routes/services');
const reviews = require('./routes/reviews');
const search = require('./routes/search');
const notifications = require('./routes/notifications');
const requests = require('./routes/requests');
const admin = require('./routes/admin');
const images = require('./routes/images');

//port number
const port = process.env.PORT || 8080;

//cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body-parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/items', items);
app.use('/services', services);
app.use('/search', search.router);
app.use('/:type/:itemId/reviews', reviews);
app.use('/notifications', notifications);
app.use('/requests', requests.router);
app.use('/admin', admin.router);
app.use('/images', images);

//index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});