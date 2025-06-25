//Classes in JS:

class VehicleCl {
    //properties
    name;
    color;
    wheels;
    //constructor function     
    constructor(name, color, wheel) {
        this.name = name;
        this.color = color;
        this.wheels = this.wheels;
    }
    //methods
    getDetails() {
        console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels`);
    }
}

const veh1 = new VehicleCl("Scooter", "Grey", 2);
console.log(veh1);
veh1.getDetails();


//Problem Statement:
//Correct syntax to define a property inside a class in JS using ES6:
class Person{
    constructor(){
        this.name="John";
    }
}




// EXAMPLE:

// Define a class named 'Animal'
class Animal {
  // The constructor method is called automatically when a new object is created.
  // It initializes the object's properties.
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Define a method within the class
  speak() {
    console.log(`${this.name} the ${this.species} makes a sound.`);
  }

  // Another method
  introduce() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.species}.`);
  }
}

// Create instances (objects) of the 'Animal' class
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

// Call methods on the created objects
dog.speak();      // Output: Buddy the Dog makes a sound.
cat.introduce();  // Output: Hello, my name is Whiskers and I am a Cat.    


//OOp 
//Inheritance
//polymorphism
// Class & Instances
//Encapsulation
//Abstract

//Encapsulation in JavaScript



function main(){
    class Car {
    constructor(make, model, year, color, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
      this.getMake = function(){
        return this.make;
      }
    }
  
    getModel() {
      return this.model;
    }
  
    getYear() {
      return this.year;
    }
  
    getColor() {
      return this.color;
    }
  
    getMileage() {
      return this.mileage;
    }
  }
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
        console.log(myCar.getMake());
        console.log(myCar.getModel());
        console.log(myCar.getYear());
        console.log(myCar.getColor());
        console.log(myCar.getMileage());
      //Do not modify the return statement;
        return Car;
      }
      main();