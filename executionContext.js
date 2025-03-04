// console.log(`username: ${userName}`);
// console.log(`userAge: ${userAge}`);

// greetUser(userName)


// var userName = 'Tom';
// var userAge = 10;
// console.log(`username: ${userName}`);
// console.log(`userAge: ${userAge}`);

// function greetUser(name) {
//     var greet = 'I hope you are doing fine.';
//     console.log(`hello ${name}, ${greet}`);
//     var currentYear = 2030;
//     const year = currentYear - userAge;
//     return `Your birth year is ${year}`;
// }
// var birthYear = greetUser(userName);
// console.log(birthYear);





// var userName = 'Tom';
// var userAge = 10;
// console.log(`username: ${userName}`);
// console.log(`userAge: ${userAge}`);

// greetUser(userName);

// function greetUser(name) {
//     console.log(`***************************`)
//     var greet = 'I hope you are doing fine.';
//     console.log(`Hello ${name}, ${greet}`);
//     var currentYear = 2030;
//     const year = birthYear(currentYear, userAge);
//     console.log(`******************************`);
//     return `Your birth year is ${year}`;
// }
// function birthYear(year, age) {
//     console.log('Calculating the birth year');
//     return year - age;
// }
// var bYear = greetUser(userName);
// console.log(birthYear);

// function factorial (n){
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial (n-1);
// }
// console.log(factorial(5));

// function foo (){
//     console.log("Hello from foo!");
// }
// function bar(){
//     foo();
//     console.log("Hello from bar!");
// }
// function baz(){
//     bar();
//     console.log("Hello from baz!");
// }
// baz();


//********SCOPE IN JAVASCRIPT  */

//GLOBAL
//FUCNTION(LOCAL)
//BLOCK
// var varNum = 10;
// let letNum = 20;
// const constNum = 30;

// function print() {
//     var varLocal = 50;
//     let letLocal = 60;
//     const constLocal = 70;
//     console.log(varLocal, letLocal, constLocal); // These variable inside the funciton are in fucnitonal/Local scope
//                                                   //They can not be accessed outside the the funciton or block.
//     console.log(varNum, letNum, constNum);

// }
// console.log(varNum, letNum, constNum); //these variables which are in the global scope can be accessed anywhre in the code 

// print();
// console.log(varLocal, letLocal, constLocal);

// function numbers(a,b,c){


// return a+b+c;


// }

// console.log( numbers(1,2,3));



var a = 10;
let b = 20;
const c = 30;

function print() {
    var a = 'ten';           //Lexical environment is the local memory          
    let b = 'twenty';        // a and b is stored in this lexical environemt 


    console.log('****** Inside print Function *******');
    console.log(a, b, c);  //
    console.log('******* ******');

    function innerPrint() {
        var a = 'inner10';
        console.log('*Inside innerPrint Function*');
        console.log(a, b, c);
    }
    innerPrint();

}

console.log(a, b, c);
print();   


// When a variable is declared in both the global scope and local scope, the variable in the local scope
// takes precedence and shadows the one in the global scope.

