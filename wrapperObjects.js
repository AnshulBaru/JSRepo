/**let num = 10;
//let str = "String";
let bigNum = 10n;
let bool = true;

console.log(num.__proto__);
//console.log(str.__proto__);
console.log(bigNum.__proto__);
console.log(bool.__proto__);


//methonds in String in JS//
let str = 'JavaScript is wonderful!'; // in this step string is declared
console.log(str.__proto__);


console.log(str.length);
console.log(str.charAt(0));
console.log(str.charAt(1))

let str2 = "it is dynamically typed."
console.log(str2.concat(str));

console.log(str.indexOf("S"))   //S comes at the index no.4 so the output will be 4

console.log(str2.indexOf("is"));

console.log(str2.indexOf("i", 8)); // here we get the index number of i after 8th index number because there are multiple occurance of "i" 


let message = "Hello! World!"
let character = message.charAt(15);
console.log(character);

let m = "john";
let n = "Doe";
console.log(m.toLowerCase());
console.log(n.toUpperCase());


/*********OPERATORS IN JAVASCRIPT:-**************/
/*
let k = 20;
++k;
console.log(k);   // post decrement operator. First the value is increased & then used


let i = 10;
// i++;
console.log(++i);  //post decrement operator. 


let j = 20;
console.log(--j); // pre decrement. similar to post increment. 


let l = 2;
console.log(l ** 3);  //Exponentiation operator

//AUGMENTED ASSISNMENT OPERATOR:-
let p = 2;
//p=p+1;
p += 1;             //can write p+=1 in place of p=p+1 
console.log(p);

let q = 2;
//q=q-1;
q -= 1;             //can write q+=1 in place of q=q+1 
console.log(q);


let r = 3;
r *= 3;         //Can write r*=3 in place of r=r*3 
console.log(r);

let s = 4;
s /= 2;       //Can write s/=2 in place of s=s/3
console.log(s);

// COMPARISON OPERATORS:-
console.log(5 == 5);
console.log(3 == 6);

console.log(5 != 5);  //  != is not equals to 
console.log(5 <= 5);
console.log(5 >= 5);

console.log('5' == 5);  // linient equals to(==). 
console.log('5' === 5); // Strict equals to(===); 

console.log('6' !== 6);

//Example:-
let birthYear = 17;
let rightToVote = birthYear >= 18;
console.log(rightToVote);

//LOGICAL OPERATORS:-

let grade = 65;
let scholarship = 80;
let eligibility = (grade > 60) && (scholarship > 70);  //   AND OPERATOR
console.log(eligibility);


let m1 = 55;
let m2 = 65;
let m3 = 45;
let eligible = m1 > 60 || m2 > 60 || m3 > 60;     // OR OPERATOR
console.log(eligible);



let rightOfVoting = true;
console.log(!rightOfVoting);

//How logical operators works on numbers
//LOGICAL OPERATORS  ON NUMBERS:-//   This is rare and only happens in JavaScript.
console.log(3 && 1);
console.log(0 && 4)
console.log(1 && 6 && 7 && 8 && 0 && null);


let marks1 = 20;
let marks2 = 15;
let marks3 = 10;
let avg = marks1 + marks2 + marks3 / 3;
console.log(avg);


//type conercion
console.log("5" + 5);
console.log("55" - 10);


//type conversion
console.log(Number(25));

console.log("55" - "10");


let A1 = Number("90");
let A2 = Number("96");
let A3 = Number("77");
averageScore = (A1 + A2 + A3) / 3;
console.log(averageScore);



console.log("5" * 2);     
 */

//CONDITION AND LOOPING STATEMENT IN JAVASCRIPT

// let a = 10;
// if (a > 9) {
//     console.log(a);
// }

// let num = 10;
// if (num > 11) {
//     console.log("Hello how are you!");
// } else {
//     console.log("Good bye see you again");
// }

//print even number if number is even
// let number = prompt("please enter the number")   // prompt dialogue box
// if (number % 2 == 0) {
//     console.log("Number is even");

// }

//   let x = prompt("hey fokls Whatsup");
// let teacher = "present";
// if ((teacher = "present")) {
//     console.log("Class");
// } else {
//     console.log("No class");
// }

// let value = 11;
// if (value % 2 == 0) {
//     //== is a comparison operator that checks whether two values are equal in value.
//     console.log("Even");
// } else {
//     console.log("Odd");
// }
// console.log("Outside if-else");

// let marks = 75;
// if (marks > 90) {
//     console.log("bad");
// } else {
//     console.log("good");
// }

//if else if statement
// let month = 6;
// //prompt('Enter the month number.');

// if (month >= 1 && month <= 3) {
//     // && will make sure both the conditions are true.
//     console.log("First Quater");
// } else if (month >= 4 && month <= 6) {
//     console.log("Second Quater");
// } else if (month >= 7 && month <= 9) {
//     console.log("Third Quater");
// } else if (month >= 10 && month <= 12) {
//     console.log("Fourth Quater");
// } else {
//     console.log("Invalid Month");
// }

//EMAIL VALIDATION/VERIFICATION
//input an email
// length of the email.11
//after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

// const email = ("Enter the Email address");
// const emailLen = email.length;
// const dotIndex = email.lastIndexOf(".");
// const atIndex = email.lastIndexOf("@");
// const lastIndex = emailLen - 1;

// if (emailLen < 11 ||
//     lastIndex - dotIndex < 2 ||
//     lastIndex - dotIndex > 3 ||
//     dotIndex - atIndex < 3) {
//     // if any of the above condition is is true it will be invalid email
//     console.log('invalid email');
// } else {
//     console.log("Valid Email");
// }


//NESTED IF STATEMENTS
//EXAMPLE: 
//Check eligibility for driving licence
//age>=1 -eligible else not eligible
//passed the test- eligible and can obtain the licence
//failed the test- eligible but cannot have the licence

// let age = 19;
// let testPassed = true;

// if (age >= 18) {
//     console.log('eligible for the licence');
//     if (testPassed == false) {
//         console.log("Congratulation!, you have got the licence");
//     } else {
//         console.log("Sorry, you didn't clear the test.");
//     }
// } else {
//     console.log("Not eligible for licence");
// }

//SWITCH STATEMENT
//EXAMPLE:Stimulate a traffic light using switch

// let color = "red";

// switch (color) {
//     case "red": console.log("STOP! the light is red.");
//         break;
//     //if one statement is true then it will not go to another statement. break takes care of that
//     case "yellow": console.log("CAUTION! The light is yellow");
//         break;

//     case "green":
//         console.log("GO AHEAD!");
//         break;

//     default:
//         console.logI("Invalid Color");
// }

//TERNARY OPERATOR
//ternary operator is shorthand for the if-else statement
//example:

// let num1 = 10;
// let num2 = 19;

// let greater = num1 > num2 ? num1 : num2;


// // if (num1>num2){
// //     greater = num1;
// // }else {
// //     greater= num2;
// // }


// console.log('Greater number is ' + greater);

// // FOR LOOP
// //  for(Initializing, Condition,  Update) {
// //   }
// //Example: print a message 10 times:

// for (let i = 1; i <= 10; i++) {
//     console.log("Ram");
// }

// //print a series of numbers from 1-20
// let i = 1;
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }
// // sum of all even numbers from 1 to 10
// let sum = 0;
// for (k = 1; k <= 10; k++) {
//     if (k % 2 === 0) {
//         sum = sum + k;

//     }
// }
// console.log(sum);

// // Factorial of number 6 
// let result = 1; // Start with 1

// for (l = 1; l <= 6; l++) {
//     result = result * l; // Multiply result by the current number
// }

// console.log(result)

//PRINT ALL THE NUMBERS FROM 1 TO 50 

// let e = 2;
// for (; e <= 50; e = e + 2) {         // if initialization is done before you can skip in this line but you have to write semicolon at that place

//     console.log(e);
// }

//NUMBER IS PRIME OR NOT


// let number = 6;
// let isPrime = true;
// for (let i = 2;  i < number;  i++) {
//     if (number % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log('prime');

// } else {
//     console.log('Not Prime')
// }

//Another Example done by myself
// let z=7;
// let isprime= true;
// for(let i=2; i<z; i++){
//     if(z%i===0){
//         isprime=false;

// }else{              //we can also use break here insted of else as done in above example
//     isprime=true;
// }
// }
// if (isprime){
//     console.log('prime');

// }else{
//     console.log('notprime');
// }


//FIND WHETHER A NUMBER IS COMPOSITE OR NOT

// let m=20;
// let iscomposite=true;

// for(let p=1; p<=20; p++){
//     if(m%p===0){
//         iscomposite=true;
//         break;

//     }
// }
// if(iscomposite){
//     console.log("Composite");
// }else{
//     console.log("notComposite")
// }

//WHILE LOOP
// let j = 1;
// while (j <= 10) {
//     console.log(j);
//     j++;
// }



// let i = 0;
// while (i <= 5) {
//     console.log("no. of iterations" + " " + i); // " " are given to give space
//     i++;
// }

//DO WHILE LOOP:

// let randomNum = Math.random();                  //will give any random no. from 0 to 1
// let randomNum = Math.random() * 100;            //will give any random no. from 0 to 100
// let randomNum = Math.round(Math.random() * 100);    //in additont to above it will round off the number
// console.log(randomNum);

// let guessedNum;
// do {
//     guessedNum = prompt('Guess the Number:');
//     if (guessedNum == randomNum) {
//         console.log('Guessed Correctly!!');

//     } else {
//         console.log('Take another guess');
//     }
// } while (guessedNum != randomNum);      


// const name = "Ram";
// const age = 25;
// const message = `My name is ${name}, and I am ${age} years old.`;   // `` this is tempelate literals
// used to represent a strng
// console.log(message);
// Output: My name is Ram, and I am 25 years old


//  NESTED LOOPS :
//print multiplication table of 4*
// let num = 4;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }




// //this will give me table of all numbers from 2 to 10

// for(let num=2; num<=10; num++){
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }
// console.log('*****************');
// }

//FUNCITONS

//Creation or definiton of function
// function greetUser() {
//     console.log('Hello! Welcome to JavaScript');
// }   //function is defined but not called

// //In order to use this function we have to call it or in technical term we have to invoke it:
// greetUser();                 //function is called or invoked
// greetUser();

//Function using parameters
// function greetUser(userName) {
//     console.log(`Hello ${userName}, welcome to the App!`);
// }

// greetUser('Rahul');
// greetUser('Surya');    //In this way parameters are helpful in making the function more dynamic

// function greetUser(userName, medium){
//     console.log(
//         `Hello ${userName}, welcome to the ${medium}!`
//     );
// }
// greetUser('Rahul', 'city');
// greetUser('Aryan', 'Website');
// greetUser('shaam', 'Office');

// WE CAN CALL A FUNCTION INSIDE ANOTHER FUNCTION

function printDetails(name){
    console.log(`Name: ${name}`);
    calculateAge(1995); 
}
 function calculateAge(birthYear){
    console.log(2020 - birthYear);
 }
 printDetails('Rahul');
 

 //Default Parameters:
  function sum(num1 =5, num2=3){        //Default values are given to parameters because in case we forget to give arguments
                                        // Argument are the values passed to the function when it is called/Invoked.
    console.log( `Sum of the numbers is: ${num1+num2}`)
  }
  sum(4,5);
  sum(4);