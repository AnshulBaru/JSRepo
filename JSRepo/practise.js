// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isEmployed: true,
//   address: {
//     street: "123 Main St",
//     city: "Anytown"
//   },
//   greet: function () {
//     console.log("Hello, my name is " + this.firstName);
//   }
// };

// console.log(person.firstName); // Output: John
// console.log(person.address.city); // Output: Anytown
// person.greet(); // Output: Hello, my name is John

// const students ={
//   name1: 'Ram',
//   name2: 'Sham',
//   name3: 'Ravi',
//   name4: 'Pawan',
//   name5: 'Suraj',
//   School:{
//     SchoolName: "Springdale Public School"
//   }
// };

// console.log(students.School.SchoolName);

// function Vehicle(name, color, wheels) {
//   this.name = name;
//   this.color = color;
//   this.wheels = wheels;
// }
// Vehicle.prototype.getDetails = function () {
//   console.log(`
//     The ${this.name} is ${this.color} in color.
//       It has ${this.wheels} wheels`);
// };

// const car = new Vehicle("Car", "blue", 4);

// console.log(car.hasOwnProperty("getDeatils"));

// car.getDetails();

// class Cars {
//   constructor(model, colour) {
//     this.model = model;
//     this.colour = colour;
//   }
//   name() {
//     console.log(`This is a ${this.model} which is ${this.colour} in color`);
//   }
// }
// let c1 = new Cars("Porshe GTR", "Red");
// let c2 = new Cars("Toyota Tacoma", "White");

// c1.name();
// c2.name();

// console.log({} + []);

let car = "Honda City";
let motorcycle = "Yamaha";
console.log(car);
console.log(car.length);
console.log(car.toLowerCase());
console.log(car.toUpperCase());
console.log(car.concat(" ", motorcycle)); //" " is added for space betweent the car and motorcycle

console.log(10 % 2);
console.log(3 * 2);

let i = 10;

console.log(i++);
console.log(i);

let j = 3;
console.log(j ** 3);



// Sum of integers from 1 to 10:
let sum=0;
for(k=1; k<=10; k++){
    if (k<=10){
        sum=sum+k;
        }
}
console.log(sum)

//Check whether a number is prime or not