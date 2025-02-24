'use strict';

// Todo 1: Create interface input,output data
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Todo 2: Functions calculators for tow numbers.
function calculators(firstNumber, operation, secondNumber) {
    switch (operation) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return secondNumber === 0 ? "Can Not Divide BY Zero!" : firstNumber / secondNumber;
        default:
            return "Processing Failure Enter True Operator and 2 Numbers";
    }
}

// Todo 3: Start programs in node.js terminal.
rl.question("Enter First Number: ", (input1) => {
    const inputFirstNumber = parseFloat(input1);

    rl.question("Enter Operation: ", (operator) => {

        rl.question("Enter Second Number: ", (input2) => {
            const inputSecondNumber = parseFloat(input2);

            if (isNaN(inputFirstNumber) || isNaN(inputSecondNumber)) {
                console.log('Error!, Enter Valid Numbers or Operators!');
            } else {
                let result = calculators(inputFirstNumber, operator, inputSecondNumber);
                console.log(`Result ${operator} = ${result}`);
            }
            rl.close();
        });
    });
});