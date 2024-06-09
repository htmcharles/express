const express = require('express');
const moviesRoutes = require('./routes/moviesRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/movies', moviesRoutes);

const port = 3000;
app.listen(port, () => {
    console.log('Server is listening at 3000');
});
