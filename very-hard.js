// importing functions from hard.js
import { add, subtract, multiply, divide } from './hard.js';

// 2 conditions needed for do...while loop. 
// (condition = first Number)
// (condition2 = second Number)
var condition = false;
var condition2 = false;

// do while loop for first number.
// Purpose of do while loop was to check for correct inputs.
do {
    var firstNumber = parseInt(prompt("Enter First Number : "));
    if (isNaN(firstNumber)) {
        alert("Invalid integer. Please enter a Number");
    } else {
        condition = true;
    }
} while (condition == false);

// prompting users to input operator.
var operator = prompt("Enter operator '+ , -, *, or / ' : ");

// while loop to check if the user input correct operator. 
// If correct operator was not provided, users have to make sure to input correct operator.
while (operator != '+' && operator != '-' && operator != '*' && operator != '/') {
    alert("Please Enter either '+, -, *, or / ' : ");
    var correctOperator = prompt("Enter operator again '+ , -, *, or / ' : ")

    if (correctOperator === '+' || correctOperator === '-' || correctOperator === '*'
        || correctOperator === '/') {
        break;
    }
}


// do while loop for second number.
// Purpose of this do while loop was to also check for correct inputs from the user.
do {
    var secondNumber = parseInt(prompt("Enter Second Number : "));
    if (isNaN(secondNumber)) {
        alert("Invalid integer. Please enter a Number");
    } else {
        condition2 = true;
    }
} while (condition2 == false);


// switch statement for different operators that the user typed.
switch (correctOperator || operator) {
    case '+': add(firstNumber, secondNumber);
        break;
    case '-': subtract(firstNumber, secondNumber);
        break;
    case '*': multiply(firstNumber, secondNumber);
        break;
    case '/': divide(firstNumber, secondNumber);
        break;
}