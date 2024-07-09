const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is a required field'],
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:[true,'Description is a required field'],
        trim:true
    },
    duration :{
        type:Number,
        required:[true,'Duration is a required field'],
        trim:true
    },
    ratings:{
        type:Number
    },
    totalRating:{
        type:Number
    },
    releaseYear:{
        type:Number,
        required:[true,'Release year is a required field'],
        trim:true
    },
    releaseDate:{
        type:Date
    },
    createdAT:{
        type:Date,
        default:Date.now()
    },
    genres:{
        type:[String],
        required:[true,'Genres is a required field'],
        
    },
    directors:{
        type:[String],
        required:[true,'Directors is a required field'],
       
    },
    coverImage:{
        type:String,
        require:[true,"Cover image is required filed"]
    },
    actors:{
        type:String,
        require:[true,"Actors is required filed"]
    },
    price:{
        type:Number,
        requre:[true,"Price is a required field"]
    }
});

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;
