

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




//Factory Function:

// function movie(title, year) {

//     const movieObj = {
//         title: title,
//         year: year,
//         getDetails() {
//             console.log(`
//             Title:${this.title}
//             Year: ${this.year}
//              `);

//         },
//     };
//     return movieObj;
// }

// const movie1 = movie("The Avengers", 2012);
// console.log(movie1)
// movie1.getDetails();


//Constructor Function:

// function Movie(title, year) {

//     this.title = title;
//     this.year = year;

//     this.getDetails = function () {
//         console.log(`
//             Title:${this.title}
//             Year: ${this.year}
//              `);

//     };
// }
//To invoke the above function we use "new" keyword

// const movie2 = new Movie('Avatar', 2030);
// console.log(movie2);


//Another example
function Student(className, rollNumber) {
  this.className = className
  this.rollNumber = rollNumber
}

const Ram = new Student("10th", 25);
const Suraj = new Student("12th", 11);

console.log(Ram);
console.log(Suraj);
console.log(Ram.rollNumber);

//Prototype


function Film(title) {
  this.title = title;
}
const film1 = new Film('IronMan');
film1.year = 2025;
console.log(film1);

console.log(film1.__proto__)


//Example
function Game(name, platform) {
  this.name = name;
  this.platform = platform;
}
const fifa = new Game("FIFA 23", "PlayStation");
console.log(fifa.__proto__ === Game.prototype);
console.log(fifa.__proto__ === Object.prototype);

//In JavaScript, a prototype is a reference to another object that is used for property and method inheritance. Each object has a prototype, expect for the base object.
// When we say JavaScript is a prototype-based language, we mean that it uses prototypes to create and inherit properties and methods, instead of classical classes
//  like in Java or C++ (though modern JavaScript uses class syntax, it still works under the hood using prototypes).

function Movie(title) {
  this.title = title;
}
const movie1 = new Movie('The Avengers');

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie('Avatar')
console.log(movie2)
console.log(movie2.__proto__);
//prototype of movie1 and movie2 is Movie
console.log(movie2.__proto__.__proto__);
console.log(Object.getPrototypeOf(movie2))



// Constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.age = 30;       // Adding a property to the prototype

const john = new Person("John");   // Creating a new instance of Person

john.__proto__.age = 40;    // Modifying the prototype using john's __proto__

// Accessing age from john and from the prototype directly
console.log(john.age);               // Output: 40
console.log(Person.prototype.age);  // Output: 40


// .prototype  example

function Person(name) {
  this.name = name;
}

// Add method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Arjun");
const p2 = new Person("Bheem");

p1.sayHello();
p2.sayHello();

// prototype in arrays

const inputs = [1, 2, 3, 4, 5];
console.log(inputs.__proto__.__proto__);

//Problem Statement:
let arr = [1, 2, 3];
console.log(arr.constructor === Array);

//Object.create

const car={
  getDetails(name){
    console.log(`Your car is ${name}`);
  },
};

const car1 =Object.create(car);  // Object.create will link car1 to car and establish prototype chain
console.log(car1.__proto__);   //.__proto__ will tell us what will be the prototype of car1.Which is getDeatils in this case
car1.getDetails('Audi');


//Object.asssign()

 const firstObj={a:2};
 const secondObj={c:4,d:5};

 returnedObj= Object.assign(firstObj, secondObj);

 console.log(firstObj);
 //or
 console.log(returnedObj);  //Same output
//To check:
console.log(firstObj===returnedObj);


//Object.freeze()

const user = {
  name: "Arjun",
  address: {
    city: "Delhi"
  }
};

Object.freeze(user);

user.address.city = "Mumbai";  // This will work because 'address' is not frozen

console.log(user);

