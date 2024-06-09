const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router
    .route('/')
    .get(moviesController.getALLmovies)
    .post(moviesController.createMovie);

router
    .route('/:id')
    .get(moviesController.getOneMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie);

module.exports = router;
