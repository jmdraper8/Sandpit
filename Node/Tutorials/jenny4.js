var movies = require('./movies4');

var jennyMovies = movies();

jennyMovies.favMovies = "The Notebook";

console.log("Jenny's favorite movie is: " + jennyMovies.favMovies);