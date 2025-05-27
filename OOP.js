

// const movie = {
//     title: "The Avengers",
//     year: 2012,
//     genre: "Action, Sci-Fi, Thriller",
//     cast: {
//         main_lead: "Robert Downey Jr.",
//         others: "Chris Evans",
//     },
//     getDetails() {
//         //     console.log(`
//         //          Title: ${movie.title}
//         //          Genre: ${movie.year}
//         //          Cast: ${movie.cast} `) 
//         // },    // this form of object is called object literals
//     //     console.log(`
//     //     Title: ${movie.title}
//     //     Genre: ${movie.year}
//     //     Cast: ${movie.cast} `)
//     // },

//      console.log(`
//         Title: ${this.title}
//         Genre: ${this.year}
//         Cast: ${this.cast} `)        // we can also replace movie by 'this' keyword b
//     },

// //if we write this is place of movie then we'll get the same output.
// // this allows us to access and manipulte object properties and methods within the scope of an object



//     getMovieDetails(detail) {
//         console.log(movie[detail])   // by using bracket notation  
//     }



// };
// console.log(movie.title);

// movie.getDetails();

// const detail = "year";
// movie.getMovieDetails(detail);


//Construction function:



function movie(title, year) {

    const movieObj = {
        title: title,
        year: year,
        getDetails() {
            console.log(`
            Title:${this.title}
            Year: ${this.year}
             `);

        },
    };


    
}
