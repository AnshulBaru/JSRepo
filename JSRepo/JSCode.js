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

function printDetails(name) {
  console.log(`Name: ${name}`);
  calculateAge(1995);
}
function calculateAge(birthYear) {
  console.log(2020 - birthYear);
}
printDetails("Rahul");

//Default Parameters:
function sum(num1 = 0, num2 = 3) {
  //Default values are given to parameters because in case we forget to give arguments
  // Argument are the values passed to the function when it is called/Invoked.
  console.log(`Sum of the numbers is: ${num1 + num2}`);
}
sum(4, 5);
sum(4);
sum();

// ** Return value of a funtion:

function squared(number) {
  return number * number;
}
const a = squared(5);
console.log(a);

function add(a, b) {
  return a + b; // returns the sum of a and b
  console.log(a + b); // this code will not be executed because any code after the retrun statement will not be executed.
}
result = add(3, 4); // calls the function and stores the value(7) in variale named 'result'
console.log(result);

// Function to compare the last digits of two numbers
function lastDigit(num1, num2) {
  // Extract the last digits of both numbers
  const lastDigit1 = num1 % 10;
  const lastDigit2 = num2 % 10;

  // Check if the last digits are equal
  return lastDigit1 === lastDigit2;
}

// Test cases
console.log(lastDigit(29, 19)); // Expected output: true
console.log(lastDigit(12, 24)); // Expected output: false
console.log(lastDigit(101, 11)); // Expected output: true
console.log(lastDigit(5, 12345)); // Expected output: true
console.log(lastDigit(78, 89)); // Expected output: false

// **** Problem statement*****
// Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.

// Expected Input
// num1 = 78574
// num2 = 78392
// Expected Output
// true

// Expected Input
// num1 = 74847
// num2 = 781
// Expected Output
// false

// Test Cases
// Make a function named commonDigits
// Take two numbers as arguments
// Count the number of digits in both the numbers
// Check if both the numbers have equal numbers of digits
// If they are equal return true else return false

// Note
// Use Math.floor when dividing the number by 10 to ensure that it returns data type number.
// You can also do this question with the help of type conversion. *******//

//****   SOLUTION OF ABOVE STATEMENT:     *****//

function commonDigits(num1, num2) {
  // Convert numbers to strings and get their lengths
  const digitsNum1 = num1.toString().length;
  const digitsNum2 = num2.toString().length;

  // Compare the lengths and return true or false
  return digitsNum1 === digitsNum2;
}

// Test cases
console.log(commonDigits(78574, 78392)); // Expected output: true
console.log(commonDigits(74847, 781));
console.log(commonDigits(11234, 11455));

//** ARRAYS IN JS */
const studentDetails = ["Alex", "1995", "Suzy"];
console.log(studentDetails);

const historyMarks = [10, 20, 30, 40, 50, 60, 70]; //length of array is 7 but index no. of array is 6 (index no. = length-1)
console.log(historyMarks);

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

let cars = ["BMW", "Tesla", "Audi"];
console.log(cars.length);

//DIFFERENT WAYS TO CREATE AN ARRAY
// ** First one is using Square branckets that we used above
// Another one is to use Array() constructor. e.g:
const arr = new Array("Ram", "Rahul", "Sonam");
console.log(arr);

//**ACESSING ARRAYS */

const cadetNames = ["Lakshman", "Surya", "Ojas"];
console.log(cadetNames[2]); //Acessing using square brackets and inside square brackets write index no. of the particular element that we want to print

const marks = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(marks[2]);
marks[2] = 10; // We can also modify any data in array using index number like this
// and if we again console out after making this change, we will get another output which we modified
console.log(marks[2]);

//**ARRAY METHODS **/

const cities = ["Mumbai", "Delhi", "Calcutta", "Jaipur", "Chennai"];
console.log(cities.length);
cities[2] = "Kolkata";
console.log(cities);

//** Adding an Element */

//push
const teams = ["CSK", "RCB", "MI", "LSG"];
teams.push("GI");
console.log(teams); //push will only add the elements to the end of the array

//unshift
teams.unshift("KKR");
console.log(teams); //unshift will add at the starting of the array

//**  Removing  an element */

//pop
teams.pop(); // pop will remove the elements from the end of the array
teams.pop(); // if we agian write pop it will remove another element from the end of the array.

console.log(teams);

//shift
teams.shift(); // shift will remove the element for the start of array
console.log(teams);

//**  Check the element is present or not  */

//indexOf()
teams.indexOf("RCB");
const RCBIndex = teams.indexOf("RCB");
console.log(RCBIndex);
const GTIndex = teams.indexOf("GT");
console.log(GTIndex); //GT is not present in the array and any element which is not present in the array, it will return us -1

//includes()                // includes() will aso tell the element is present or not but it will return boolean value

const RCBIncludes = teams.includes("RCB");
console.log(RCBIncludes);

//slice() and splice()\

console.log(teams.slice(2)); // it will remove starting 2 elements from the array.. it creates the copy of original array
console.log(teams.slice(-1)); // it will retain the last element of the array and other elements will be eliminated.

teams.splice(2, 0, "GT", "LSG"); //2 is index no. , 0 is delete count,  and third one "GT" is what ever we want to add, and
// we can add another element
console.log(teams);

//**concat
//combine two or more arrays
const city1 = ["Jaipur", "Mumbai"];
const city2 = ["Bangluru", "Pune"];
const mergeCity = city1.concat(city2);
console.log(mergeCity);

/**   LOOPS OVER ARRAYS   */

const Students = ["Tina", "Raj", "Bobby", "Seema", "Alex", "Sita"];

//**for loop:  */

// for(let i=0; i<Students.length; i++ ){
//   console.log(`Roll No ${i+1}: ${Students[i]}`);
// }

// for .. in loop:
for (let i in Students) {
  console.log(`Roll No ${Number(i) + 1}: ${Students[i]}`); // type conversin is also done in this step to convert string to number
}

// for ..of loop:
for (let student of Students) {
  console.log(student);
}

//** SPREAD AND REST OPERATOR  */
const aprilBatch = ["Tina", "Madhur"];
const mayBatch = ["Ritik", "Deepak", "Shalini"];
const juneBatch = ["Saba", "Shivani"];
const julyBatch = [];

// function addStudent(batch, student){
//   batch.push(student);
//   console.log(batch);
// }
// addStudent(aprilBatch, 'Ritu');
// addStudent(mayBatch, 'Sunny');

//REST operator ...
function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}
addStudents(aprilBatch, "Sunny", "Ritu", "Sheena");

//SPREAD OPERATOR:

const newBatch = [...mayBatch]; //Shallow copy, which means the changes made to the original one will not effect tot he new one
//spread operator can be used to expand array and then copy it (expanding and copying, both work are done)
//if we use spread operator  it will make a copy and don't make any change to newBatch
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);
console.log(newBatch);

const arr3 = [...mayBatch, ...juneBatch];
console.log(arr3);

//**BREAK AND CONTINUE */

//find first five even nos. and a new array to be created
const inputs = [11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53];
const evenNumbers = [];

for (let i of inputs) {
  // this for will return all values of array
  if (i % 2 !== 0) {
    // (this is the condition) this will check whether values are even or not
    continue; // continue will skip all those iterations when odd numbers are coming
  }
  evenNumbers.push(i);
  if (evenNumbers.length === 5) {
    break;
  }
  console.log(evenNumbers); // we will get 4 elements in the output because after using break the loop will be terminated
  // so we will console.log out of the loop
}

console.log(evenNumbers);

// **Problem statement//:

// You are tasked with creating a program that processes an array of positive integers. Your goal is to find the sum of all even numbers in the array, but you need to implement a special condition: if you encounter a number that is a multiple of 5, you should skip it and move on to the next element without including it in the sum.

// Expected Input
// [1,6,8,3,5,20,10]
// Expected Output
// 14

// Test Cases
// Find all the even elements in the array
// Omit those elements which are divisible by 5
// Sum all the elements which satisfy the given conditions
// Return the sum
const input = [1, 6, 8, 3, 5, 20, 10];
function sumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 2 === 0 && num % 5 !== 0) {
      // Check if even and not divisible by 5
      sum += num; //means sum= sum+num
    }
  }

  return sum;
}
answer = sumOfArray(input);
// Test case

console.log(answer); // Expected output: 14

/**STRING TRAVERSAL */

// let str = "JavaScript is an amazing language."

// for (let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));         //charAt will give us the character at the particular index no.
//   //The charAt() method in JavaScript is used to find and retrieve characters at specified indices (index nos.) in a string
// }

//Calculate the occurance of 'a' in the below stirng:
function countChars(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ch) {
      count++;
    }
  }
  console.log(`Occurrences of character ${ch} is: ${count}`);
}
let str = "JavaScript is an amazing language.";
let charToFind = "a";

countChars(str, charToFind);

//METHODS IN STRINGS//

let string = "JavaScript is, a Dynamically, typed language.";

// includes() :
// includes returns true or false if a certain substring is included/present or not

console.log(string.includes("is"));

//replace() :
console.log(string.replace("is", "was"));

//replaceAll() :
console.log(string.replaceAll("is", "was"));
console.log(string.replaceAll("a", "@"));

//trim() :  //trim() will remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of a string
console.log(string.trim());

//substring() :
console.log(string.substring(3)); //cutting out everything before this index no.3
console.log(string.substring(3, 10)); // get characters from index no.3 to index no.9... 10th index no. is excluded from substring
console.log(string.substring(-4, -12)); // -ve value will be converted to 0

//slice() :
console.log(string.slice(3, 12)); // similar to substring but diffent when we give negative value
console.log(string.slice(-3)); // will give last 3 characters
console.log(string.slice(-9, -3)); // will give from last 9th character till last 3rd character

//split() :    // it will convert the string into an array
//we have to tell on which token we want to split. Whether we want to split on space or comma or  explamation mark or any character.

// let words = string.split(" ")  //where ever we find space it will split
let words = string.split(","); //where ever we find comma it will split
console.log(words);

/** OBJECTS IN JS  */
const student = {
  name: "Alexa",
  age: 10,
  hobby: "Dancing",
  100: "hundred",
  show: function () {
    console.log("This is the Student detail section");
  },
};
console.log(student);

console.log(student.hobby); // to access a particular key inside the Object we use dot notation (e.g student.hobby) or square notation(e.g student["name"])
console.log(student["name"]);
console.log(student[100]);
student.show(); //calling of function
