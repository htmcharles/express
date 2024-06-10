
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

const app = require('./app'); 
// console.log(app.get('env'));

console.log(process.env);

const port = process.env.port ||3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
