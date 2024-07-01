const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');
// console.log(app.get('env'));

// console.log(process.env);

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true,
}).then((conn) => {
    // console.log(conn);
    console.log('DB Connection Successful');
}).catch((err) => {
    console.log('DB Connection Error: ', err);
});

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is a required field'],
        unique:true
    },
    description:String,
    duration :{
        type:Number,
        required:[true,'Duration is a required field']
    },
    ratings:{
        type:Number,
        default:1.0
    }
});

const Movie = mongoose.model('Movie',movieSchema);

const testMovie = new Movie({
    name: "Mosh",
    description:"Action movie",
    duration:197,
    ratings:4.6
})

testMovie.save()
.then(doc=>{
    console.log(doc)
})
.catch(err =>{
    console.log('Error occured ' + err)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
