// //Sum of even numbers from 1 to 10

// let sum = 0;
// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// //factorial of number 6

// let result = 1;
// for (let j = 1; j <= 6; j++) {
//   result = result * j;
// }
// console.log(result);

// //print all even numbers from 1 to 20

// for (k=1; k<=20; k++){
//     if(k%2===0){
//         console.log(k)
//     }
// }

// //while loop

// let l=1;
// while(l<=10){
//     console.log(l);
//     l++
// }

//do while loop

// let randomNumber=8;
// let gussedNumer;
// do{
//     gussedNumer=prompt("Guess the number:");

// }while(guessedNumber!=randomNumber);

//Nesed loop: (when one loop is placed inside the body of another loop)
// for (let num = 2; num <= 10; num++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num}*${i}=${num * i}`);
//   }
//   console.log("******");
// }

//Functions in JS

// function greetUser(){
//     console.log("Hello my name is Ram")
// }

// greetUser();

// //Return statement in JS
// function multiplied(number){
// return number*number
// }

// const a= multiplied(5);
// console.log(a);

// function add(a){
//     return a+20
// }
// const b= add(10);
// console.log(b)

// //Arrays in JS
// let fruits=["Apple", "Banana", "Mangos"]
// console.log(fruits);


// const marks=[10, 20, 40, 45]
// console.log(marks[3])

// //loop in array:
// // const students=['Tina', 'Raj', 'Bobby', 'Seema', 'Alex', 'Sita'];

// // for (let i=0; i<students.length; i++){
// //      console.log(`Roll No. ${i+1}: ${students[i]}`);
// // }

// //Resp Operator 
// const aprilBatch=["Tina","Madhur"]

// function addStudents(batch, ...students){
//     for(let i of students){
//         batch.push(i)
//     }
//     console.log(batch)
// }

// addStudents(aprilBatch, "Sunny", "Rity","Sheena")

// //SECOND PROBLEM:

// const newClass=["Ram","Sham"]

// function addNewStudents(newStudents, ...more){
//     for (let i of more){
//         newStudents.push(i)
//     }
//     console.log(newStudents);
// }
// addNewStudents(newClass, "Suraj", "Ravi", "Pawan")

// //THIRD PROBLEM:

// const basket=["Apple", "Banana"];

// function addFruits(fruitBasket, ...newFruits){
//        for(let i of newFruits){
//         fruitBasket.push(i);
//        }
//        console.log(fruitBasket);
// }
// addFruits(basket, "Mango", "Pear", "Apricot")



//Methods in JS

// let string = "JavaScript is, a dynamically, typed language."

// console.log(string.slice(-3))
// console.log(string.slice(-9,-3))


//Objects in js

// const student={
//     name: "Alex",
//     age: 10,
//     hobby:"Dancing",
//     100: "hundred",
//     show:function(){
//         console.log("This is student detail section")
//     }
// }
// console.log(student);
// console.log(student.hobby);
// console.log(student["name"]); // can also use [] with "" for access particlar object


//Arrow functon in JS



