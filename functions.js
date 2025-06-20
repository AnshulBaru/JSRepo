// /* FUNTIONS IN JS */


// //Function Declaration

// function sum(a, b) {
//     return a + b;
// }

// const sum1 = sum(5, 6);
// console.log(sum1);

// //Function expression:
// //Function expression means assigning a fucntion to a variable 

// const sum2 = function (x, y) {              //no need to give name to a function here in function expression
//     return x + y;                      //so such functions which doesn't have name are called as anonymous functions

// }
// console.log(sum2(1, 8));


// //ARROW FUNCTION

// var prod = (num1, num2) => {
//     return num1 * num2;
// };
// console.log(prod(3, 5));

// //We can also write the above arrow funciton like this:

// var prod2 = (num1, num2) => num1 * num2;   //We can omit function name as well as function keyword
// console.log(prod(2, 4));



// // IIFE (Immediately Invoked Funcion Expression)
// //Syntax:
// (function (l, m) {
//     console.log(l * m)
// })(5, 8);   //invoked by writing ()


// const user = (function () {

//     const userData = {
//         userName: "John",
//         userAge: 20
//     }
//     function getName() {
//         console.log(userData.userName);
//     }

//     function updateAge(age) {
//         console.log(userData.userAge + age)
//     }
//     return { getName, updateAge }

// })();                       //We can only access what we return 
// console.log(user);
// console.log(user.userData);  //as it is not returned so it will not be acessed outiside function
// user.getName();
// user.updateAge(3);

// //Example:
// function main() {
//     return (function () {
//         console.log("hello user")
//     })();
// }
// const result = main();

// //Example:
// var x = 10;
// (function () {
//     console.log(x);
// })();

// //Example:
// var counter = (function () {
//     var count = 0;
//     return {
//         increment: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         },
//     };
// })();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());

// //**PURE FUNCTIONS**//:

// function calculate(num1, num2) {
//     return num1 * num2;
// }
// console.log(calculate(4, 6));


// //**IMPURE FUNCTION */
// const discount = 25;

// function calcDis(price) {
//     return price - discount;
// }
// console.log(calcDis(30))

// //**CALLBACK FUCNTIONS */ : 
// //  A callback function is a function passed as an argument to another function, which gets executed later when needed.

// function greet(wish) {
//     console.log(`${wish()}, Welcome to the JavaScript`)
// }

// function sayHi() {
//     return "Hi!"
// }

// function sayHello() {
//     return "Hello";
// }

// function goodMorning() {
//     return "Good Morning";
// }

// greet(sayHi);
// greet(sayHello);
// greet(goodMorning);



// /** Function returning function */

// function greet1(message) {
//     return function wish(wishes) {

//         console.log(`${wishes}, ${message}`)
//     }
// }

// // const greeting =greet1("I hope you are doing well");
// // console.log(greeting('Hello'));

// greet1("Welcome to the session")("Hello")


// /**HIGHER ORDER FUNCITON */

// const inputs = [2, 3, 4, 5, 6, 12, 1, 4, 16];

// // function square(input) {
// //     const squared = [];
// //     for (let num of input) {
// //         squared.push(num * num);
// //     }
// //     return squared;
// // }

// // function cubic(input) {
// //     const cubes = [];
// //     for (let num of input) {
// //         cubes.push(num * num * num);
// //     }
// //     return cubes;
// // }
// // console.log(square(inputs));
// // console.log(cubic(inputs));

// function operation(input, fn) {
//     const output = []
//     for (let num of input) {
//         output.push(fn(num));
//     }
//     return output
// }

// function square(number) {
//     return number * number
// }
// function cube(number) {
//     return number * number * number
// }

// console.log(operation(inputs, square))
// console.log(operation(inputs, cube))


// /**      CURRYING IN JS :              */

// //  Example1 of currying in Js:
// function addCurried(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// console.log(addCurried(2)(3));

// //Example2:

// function multiply(a) {
//     return function (b) {
//         return a * b;
//     };
// }

// console.log(multiply(3)(4)); // Output: 12

// const double = multiply(2); // Fixes 'a' as 2
// console.log(double(5)); // Output: 10
// console.log(double(10)); // Output: 20

// //Example3:

// // function power(a,b){
// //     return a**b;     // a**b means b raise to the power a
// // }
// //above example With currying:-

// function power(b) {
//     return function (a) {
//         return a ** b
//     }
// }
// const square1 = power(2);
// console.log(square1);

// console.log(square1(4));

// /**   ONE EXAMPLE USING ARROW FUNCTIONS   */

// const add = (apple) => (mango) => (banana) => apple + mango + banana;
// console.log(add(3)(5)(6));



// // map() function in higher order functons:

// const inputs1 = [2, 3, 5, 6, 7];
// const squaredArrays = inputs1.map(function (currentElement, index) {
//     return currentElement * currentElement;

// }


// );
// console.log(squaredArrays);


//Example of .map()
// let numbers = [1,2,3,4,5];
// function doubleNumbers(num){
//     return num*2;
// }
// let doubledNumbers =numbers.map(doubleNumbers);
// console.log(doubledNumbers);

//Same example using arrow function:

// let numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = num => num * 2;
// let doubledNumbers = numbers.map(doubleNumbers);
// console.log(doubledNumbers);


// reduce() function:

// const number = [1, 2, 3, 4, 5];
// const sum = number.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;

// }, 0);
// console.log(sum);

//Same example using arrow funciton:

// const number = [1, 2, 3, 4, 5];
// const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);



//filter() function: 

//Example1:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(`Even numbers: ${evenNumbers}`);
// // if we want only array output:
// console.log(evenNumbers);





//Example2:


// const inputs = [2, 19, -23, 33, -45];
// const positives = inputs.filter(noNegative);
// function noNegative(num) {
//     return num > 0;
// }
// console.log(`Original Array: ${inputs}`)
// console.log(`Only Positive Numbers: ${positives} `);



// const negatives = inputs.filter(inp => inp < 0);
// console.log(`NegativeNumbers:${negatives}`);


//find() function

// const inputs1=[22,13,15,17,65,98,76,44,55];

// const find1=inputs1.find((num)=> num==65  )
// console.log(find1);


// const inputs2=[2,4,5,6,7];
// const find2=inputs2.find(num=>num==5)
// console.log(find2);



// const inputs1 = [22, 13, 15, 17, 65, 98, 76, 44, 55];

// const find1 = inputs1.findIndex(num => num = 65)
// console.log(find1);


// const inputs2 = [2, 4, 5, 6, 7];
// const find2 = inputs2.findIndex(num => num == 5)
// console.log(find2);


// this() keyword: 


// console.log(this);


// function checkThis() {
//     console.log(this.user);
// }

// checkThis();

// const user1 = {
//     userName: "John",
//     userAge: 12,
//     work: function () {
//         console.log(this);
//     }
// }

// user1.work();

// const user2 = {

//     userName: "Harry",

// };
// user2.work = user1.work;
// console.log(user2);

// user2.work();





