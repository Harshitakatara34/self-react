const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/moviesData");
// http://www.omdbapi.com/?i=tt3896198&apikey=9d7f647e

const movieSchema=mongoose.Schema({
    Title : {type : String,required : true },
    Year : {type : Number,required : true },
    Rated : {type : String,required : true },
    Released : {type : String,required : true },
    Runtime : {type : String,required : true },
    Genre : {type : String,required : true },
    Director : {type : String,required : true },
    Writer : {type : String,required : true },
},{
    versionKey : false
})

const MovieModel = mongoose.model("movie",movieSchema)

module.exports={
    MovieModel,
    connection
}

// {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Crime, Drama",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart"
// },