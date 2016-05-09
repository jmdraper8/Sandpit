var movies = require('./movies4');

var johnMovies = movies();

johnMovies.favMovies = "Civil War";

console.log("John's favorite movie is: " + johnMovies.favMovies);