const fs = require('fs');

let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

exports.getALLmovies = (req, res) => {
    res.status(200).json({
        status: "success",
        count: movies.length,
        data: {
            movies: movies
        }
    });
};

exports.getOneMovie = (req, res) => {
    const id = req.params.id * 1;
    let movie = movies.find(el => el.id === id);

    if (!movie) {
        return res.status(400).json({
            status: 'fail',
            message: `Movie with ID ${id} is not found`
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            movie: movie
        }
    });
};

exports.createMovie = (req, res) => {
    const newID = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newID }, req.body);

    movies.push(newMovie);

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        });
    });
};

exports.updateMovie = (req, res) => {
    let updateID = req.params.id * 1;
    const movieToUpdate = movies.find(el => el.id === updateID);

    if (!movieToUpdate) {
        return res.status(400).json({
            status: 'fail',
            message: `Movie with ID ${updateID} is not found`
        });
    }

    const index = movies.indexOf(movieToUpdate);
    Object.assign(movieToUpdate, req.body);
    movies[index] = movieToUpdate;

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: "success",
            data: {
                movie: movieToUpdate
            }
        });
    });
};

exports.deleteMovie = (req, res) => {
    const deleteID = parseInt(req.params.id, 10);
    const movieToDelete = movies.find(el => el.id === deleteID);
    const index = movies.indexOf(movieToDelete);

    if (!movieToDelete) {
        return res.status(400).json({
            status: 'fail',
            message: `Movie with ID ${deleteID} is not found`,
        });
    }

    movies.splice(index, 1);

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: 'success',
            data: null,
        });
    });
};
