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