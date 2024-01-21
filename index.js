const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movies')
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log("Not connected to database")
    console.log(err)
})


const movieSchema = new mongoose.Schema({
    name:"String",
    rating:"Number",
    year:"Number"
});

const Movie = mongoose.model('movies',movieSchema)
const Interstellar = new Movie({name:"Interstellar",rating:9.9,year:2013})
