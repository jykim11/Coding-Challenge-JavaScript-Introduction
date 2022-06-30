// add function.
function add(number1, number2) {
    var sum = number1 + number2;
    var result = `Output: ${number1} + ${number2} = ${sum}`;
    return console.log(result);
}

// subtract function.
function subtract(number1, number2) {
    var difference = number1 - number2;
    var result = `Output: ${number1} - ${number2} = ${difference}`;
    return console.log(result);
}

// multiply function.
function multiply(number1, number2) {
    var mult = number1 * number2;
    var result = `Output: ${number1} * ${number2} = ${mult}`;
    return console.log(result);
}

// divide function.
function divide(number1, number2) {
    var div = number1 / number2;
    var result = `Output: ${number1} / ${number2} = ${div}`;
    return console.log(result);
}

// exporting functions to use in very-hard.js
export { add, subtract, multiply, divide };