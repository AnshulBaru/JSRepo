//code structure of java script

console.log("My first JavaScript code");
console.log("this is new session");

/*in JavaScript anything enclosed in 
double quotes is called string*/
console.log("1+3");
//variable in JavaScript
console.log(1 + 2);
// if we want to add two numbers don't put them in quotes

// let is used to declare any variable
let x = 10;
console.log(x);

x = 20;
console.log(x);

x = "ten";
console.log(x);

//declaring
//we can also declare multiple variable in single lines
let y,
  z,
  a = 30,
  b = 40,
  c = 20;

//initializing
/* In computer programming, initialization is the assignment
 of an initial value for a data object or variable.*/
y = 50;

//use of Camel casing and  Snake casing in naming variables
let birthYearFirstChild = 35;
console.log(birthYearFirstChild);

let birth_year_first_child = 34;
console.log(birth_year_first_child);

let g = 130;
console.log(g);

let age;
age = 10;
const pi = 3.14;
console.log(pi);

var myName = "Ram";
myName = "Krishan";
console.log(myName);

//Data types
//Number(64 bit)
let num = 10;
console.log(typeof 20);

//String
const firstName = "Andrew";
const lastName = "Thomas's book"; //When apostrophe s is used then double quotes are mandatory to use because single quotes will give error
const nickName = `Tom`; // `` this symbol is backtick
console.log(typeof firstName); // typeof operator in JavaScript provides information about the data type of a value
console.log(typeof lastName);
console.log(typeof nickName);

//boolean
let boo = false;
console.log(typeof boo);

//undefined
let m;
console.log(m);
console.log(typeof m);

//null
let n = null;
console.log(n);
console.log(typeof n); //it will give object in console which is a bug in JavaScript

//BigInt(ES2020)  Very rarely used
let num1 = 10n;
console.log(typeof num1);

//Interesting things in JavaScript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 10);

let num3 = Infinity;

console.log(12 / 0);
console.log(188 / Infinity);
console.log("Initial Commit");
console.log("SecondCommit");
console.log("Third commit");
console.log("forth commit");
console.log("fifth commit");
