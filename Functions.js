/* FUNTIONS IN JS */

function sum(a, b) {
    return a + b;
}

const sum1 = sum(5, 6);
console.log(sum1);

//Function expression:
//Function expression means assigning a fucntion to a variable 

const sum2= function (x,y){              //no need to give name to a function here in function expression
return x+y;                      //so such functions which doesn't have name are called as anonymous functions

} 
console.log(sum2(1,8));