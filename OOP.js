

const movie = {
    title: "The Avengers",
    year: 2012,
    genre: "Action, Sci-Fi, Thriller",
    cast: ["Robert Downey Jr. , Chris Evans"],
    getDetails: function () {
        console.log(`Title: ${movie.title} \nGenre: ${movie.year}\nCast: ${movie.cast} `) //  \n for writing in new line 
    },    // this form of object is called object literals

    getMovieDetails: function (detail) {
        console.log(movie[ detail])   // by using bracket notation  
    }



};
console.log(movie.title);

movie.getDetails();

const detail = "year";  
movie.getMovieDetails(detail);