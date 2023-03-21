const express = require('express')
const morgan = require('morgan');
require('dotenv').config({path: './.env'})
const {movies,genres} = require('./routes')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const port = process.env.PORT || 3000
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :remote-user :date"))

app.use('/api/genres', genres)
app.use('/api/movies', movies)



app.use('*', (req, res) => {
    res.status(404).send(`You typed an invalid url`)
})
app.listen(port, ()=>{
    console.info('listening on port ', port)
})