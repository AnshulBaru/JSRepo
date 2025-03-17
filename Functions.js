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


const user=(function(){

    const userData={
        userName:"John",
        userAge:20
    }
function getName(){
    console.log(userData.userName);
}

function updateAge(age){
    console.log(userData.userAge+age)
}
return {getName, updateAge} 

}) ();                       //We can only access what we return 
console.log(user);
console.log(user.userData);  //as it is not returned so it will not be acessed outiside function
user.getName();
user.updateAge(3);