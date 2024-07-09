
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const mongoose = require('mongoose')

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true,
}).then((conn) => {
    // console.log(conn);
    console.log('DB Connection Successful');
}).catch((err) => {
    console.log('DB Connection Error: ', err);
});

dotenv.config({path: './config.env'})

const port = process.env.port ||3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
