let firstNum;
let secondNum;
let operator;

const numBtnsEl = document.querySelectorAll(".num-btn");
const operatorBtnsEl = document.querySelectorAll(".operator-btn");
const resultBtnEl = document.querySelector(".result-btn");


// SOL 1:

// function add() {
//     let result = arguments[0];
    
//     for (let i = 1; i < arguments.length; i++) {
//         result += arguments[i];
//     }
    
//     return result;
// };

// function substract() {
//     let result = arguments[0];
    
//     for (let i = 1; i < arguments.length; i++) {
//         result -= arguments[i];
//     }
    
//     return result;
// };

// function multiply() {
//     let result = arguments[0];

//     for (let i = 1; i < arguments.length; i++) {
//         result *= arguments[i];
//     }

//     return result;
// }

// function divide() {
//     let result =arguments[0];

//     for (let i = 1; i < arguments.length; i++) {
//         result /= arguments[i];
//     }

//     return result;
// }



// SOL 2: 

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



numBtnsEl.forEach((btn) => btn.addEventListener("click", function() {
    if (operator === undefined) {
        firstNum = +btn.textContent;
        console.log("first number: " + firstNum);
    } else {
        secondNum = +btn.textContent;
        console.log("second number: " + secondNum);
    }
}));

operatorBtnsEl.forEach((element) => element.addEventListener("click", function() {
    operator = element.textContent;
    console.log("operator: " + operator);

}));

function calculate() {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
            break;
        case "-":
            return substract(firstNum, secondNum);
            break;  
        case "*":
            return multiply(firstNum, secondNum);
            break;
        case "/":
            return divide(firstNum, secondNum);
            break;
    }
}

resultBtnEl.addEventListener("click", function() {
    let result = calculate();

    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;

    console.log("result: ", result);
});