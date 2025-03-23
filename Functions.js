/* FUNTIONS IN JS */


//Function Declaration

function sum(a, b) {
    return a + b;
}

const sum1 = sum(5, 6);
console.log(sum1);

//Function expression:
//Function expression means assigning a fucntion to a variable 

const sum2 = function (x, y) {              //no need to give name to a function here in function expression
    return x + y;                      //so such functions which doesn't have name are called as anonymous functions

}
console.log(sum2(1, 8));


//ARROW FUNCTION

var prod = (num1, num2) => {
    return num1 * num2;
};
console.log(prod(3, 5));

//We can also write the above arrow funciton like this:

var prod2 = (num1, num2) => num1 * num2;   //We can omit function name as well as function keyword
console.log(prod(2, 4));



// IIFE (Immediately Invoked Funcion Expression)
//Syntax:
(function (l, m) {
    console.log(l * m)
})(5, 8);   //invoked by writing ()


const user = (function () {

    const userData = {
        userName: "John",
        userAge: 20
    }
    function getName() {
        console.log(userData.userName);
    }

    function updateAge(age) {
        console.log(userData.userAge + age)
    }
    return { getName, updateAge }

})();                       //We can only access what we return 
console.log(user);
console.log(user.userData);  //as it is not returned so it will not be acessed outiside function
user.getName();
user.updateAge(3);

//Example:
function main() {
    return (function () {
        console.log("hello user")
    })();
}
const result = main();

//Example:
var x = 10;
(function () {
    console.log(x);
})();

//Example:
var counter = (function () {
    var count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());

//**PURE FUNCTIONS**//:

function calculate(num1, num2) {
    return num1 * num2;
}
console.log(calculate(4, 6));


//**IMPURE FUNCTION */
const discount = 25;

function calcDis(price) {
    return price - discount;
}
console.log(calcDis(30))

//**CALLBACK FUCNTIONS */ : When we use function as a parameters , as a argument to pass inside a function

function greet(wish) {
    console.log(`${wish()}, Welcome to the JavaScript`)
}

function sayHi() {
    return "Hi!"
}

function sayHello() {
    return "Hello";
}

function goodMorning() {
    return "Good Morning";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);



/** Function returning function */

function greet1(message) {
    return function wish(wishes) {

        console.log(`${wishes}, ${message}`)
    }
}

// const greeting =greet1("I hope you are doing well");
// console.log(greeting('Hello'));

greet1("Welcome to the session")("Hello")


/**HIGHER ORDER FUNCITON */

const inputs = [2, 3, 4, 5, 6, 12, 1, 4, 16];

// function square(input) {
//     const squared = [];
//     for (let num of input) {
//         squared.push(num * num);
//     }
//     return squared;
// }

// function cubic(input) {
//     const cubes = [];
//     for (let num of input) {
//         cubes.push(num * num * num);
//     }
//     return cubes;
// }
// console.log(square(inputs));
// console.log(cubic(inputs));

function operation(inputs, fn) {
    const output = []
    for (let num of input) {
        output.push(fn(num));
    }
    return output
}

function square(number) {
    return number * number
}
function cube(number) {
    return number * number * number
}

console.log(operation(inputs, square))
