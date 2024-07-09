const Movie = require('./../models/movieModel');

exports.getALLmovies = async(req, res) => {
    try{
        const movies = await Movie.find()
        res.status(200).json({
            status:'SUCCESS',
            length:movies.length,
            data:{
                movies
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:err.message
        })
    }
};

exports.getOneMovie = async(req, res) => {
    try{
        const movie = await Movie.findById(req.params.id)
        res.status(200).json({
            status:'SUCCESS',
            data:{
                movie
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:'Movie not found'
        })
    }
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
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }

};

exports.updateMovie = async(req, res) => {
    try{
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
        res.status(200).json({
            status:'SUCCESS',
            data:{
                updateMovie
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:err.message
        })
    }
};

exports.deleteMovie = async(req, res) => {
    try{
        const movieDeleted = await Movie.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status:'SUCCESS',
            data:null
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            err:err.message
        })
    }
};
