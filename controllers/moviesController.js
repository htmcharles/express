const Movie = require('./../models/movieModel');

exports.getALLmovies = (req, res) => {

};

exports.getOneMovie = (req, res) => {

};

exports.createMovie = async(req, res) => {
    try{
        const movie = await Movie.create(req.body)
        res.status(201).json({
            status:'SUCCESS',
            data:{
                movie
            }
        })
    }catch(err){
        console.error('Error creating movie:', err);
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }

};

exports.updateMovie = (req, res) => {
    
};

exports.deleteMovie = (req, res) => {
    
};
