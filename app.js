const express = require('express');
const morgan = require('morgan');
const server = require('./server');
const moviesRoutes = require('./routes/moviesRoutes');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV==="development"){
    app.use(morgan('dev'));
}
app.use(express.static('./public/'))

app.use('/api/v1/movies', moviesRoutes);

module.exports = app;
