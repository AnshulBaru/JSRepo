const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown"
  },
  greet: function () {
    console.log("Hello, my name is " + this.firstName);
  }
};

console.log(person.firstName); // Output: John
console.log(person.address.city); // Output: Anytown
person.greet(); // Output: Hello, my name is John

    



const students ={
  name1: 'Ram',
  name2: 'Sham',
  name3: 'Ravi',
  name4: 'Pawan',
  name5: 'Suraj',
  School:{
    SchoolName: "Springdale Public School"
  }
};

console.log(students.School.SchoolName);

