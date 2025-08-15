//Classes in JS:
//Classes are just an alternative way of creating objects and it is considered
// as more convenient for developers

//Syntax of Classes:(Class Declaration)

class VehicleCl {
  //properties
  name;
  color;
  wheels;
  //constructor function (It is optional if we don't have any values to initialize) We can skipt it
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

//Problem  Statement:
//Correct syntax to define a property inside a class in JS using ES6:
class Person {
  constructor() {
    this.name = "John";
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
dog.speak(); // Output: Buddy the Dog makes a sound.
cat.introduce(); // Output: Hello, my name is Whiskers and I am a Cat.

cat.speak();

//Class Expresssion: (this is similar to function syntax)

const Vehicle = class {};

//Example (Problem Statement on CN course ES6 Classes)

class Person1 {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  speak() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

class Student1 {
  person;
  major;
  gpa;

  constructor(person, major, gpa) {
    this.person = person;
    this.major = major;
    this.gpa = gpa;
  }
  study() {
    console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
  }

  speak() {
    console.log(
      `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`
    );
  }
}

const per1 = new Person1("John", 20, "M");

per1.speak();

const stu1 = new Student1(per1, "CS", 9);
stu1.study();
stu1.speak();
