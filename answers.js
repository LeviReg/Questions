//name variable and logging it
let myName = "Levi";
console.log("Hello, " + myName + "!");

//adding two variables
let num1 = 11;
let num2 = 7;

let sum = num1 + num2;

console.log("The sum of " + num1 + " and " + num2 + " is equal to " + sum);

//string concatination
let firstName = "Levi"
let secondName = "Regan"

let fullName = firstName + " " + secondName

console.log(fullName)

//even or odd number check
function evenOrOdd(number){
   
    if(number % 2 == 0){
        return console.log("This number is even")
    }
    else{
        return console.log("This number is odd")
    }

}

evenOrOdd(15);

//array of fruits
let fruits = ["Apple", "Orange", "Pear" , "Banana", "Turkey"]

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//multiplication fuction
function multiply(a,b){

    return a * b;

}

console.log(multiply(3,2))

//car object
const car = {
    make: "Toyota",
    model: "Vroom",
    year: "3077"
}

console.log(car.model)

//modify array of data

let numbers = [1,2,3,4];
console.log(numbers)
numbers.push(5)
console.log(numbers)
numbers.unshift(0)
console.log(numbers)