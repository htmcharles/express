const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.param('id', moviesController.checkId);

router
    .route('/')
    .get(moviesController.getALLmovies)
    .post(moviesController.validateBody, moviesController.createMovie);
 
router
    .route('/:id')
    .get(moviesController.getOneMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie);

module.exports = router;
