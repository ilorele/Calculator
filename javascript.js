let firstNum;
let secondNum;
let operator;
let result;

const numBtnsEl = document.querySelectorAll(".num-btn");
const operatorBtnsEl = document.querySelectorAll(".operator-btn");
const resultBtnEl = document.querySelector(".result-btn");

const acBtnEl = document.querySelector(".Ac-btn");
const cBtnEl = document.querySelector(".C-btn");

const calculatioDisplayEl = document.querySelector(".calculation-display");
const resultDisplayEl = document.querySelector(".result-display");

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
    return (+num1 + +num2);
}

function substract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

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



numBtnsEl.forEach((btn) => btn.addEventListener("click", function() {
    if (operator === undefined) {
        if (firstNum === undefined) {
            firstNum = btn.textContent;
        } else {
            firstNum += btn.textContent;
        }
        
        console.log("first number: " + firstNum);
        calculatioDisplayEl.textContent += btn.textContent;
    } else {
        if (secondNum === undefined) {
            secondNum = btn.textContent;
        } else {
            secondNum += btn.textContent;
        }

        console.log("second number: " + secondNum);
        calculatioDisplayEl.textContent += btn.textContent;

        // secondNum = +btn.textContent;
        // calculatioDisplayEl.textContent += secondNum;
        // console.log("second number: " + secondNum);

        // result = calculate();
        // firstNum = result;
        // secondNum = undefined;
        // operator = undefined;
    }
}));

operatorBtnsEl.forEach((element) => element.addEventListener("click", function() {
    // operator = element.textContent;
    // calculatioDisplayEl.textContent += operator;
    // console.log("operator: " + operator);

    if (operator) {
        result = calculate();
        firstNum = result;
        secondNum = undefined;
        operator = element.textContent;
        calculatioDisplayEl.textContent += operator;
    } else {
        operator = element.textContent;
        calculatioDisplayEl.textContent += operator;
        console.log("operator: " + operator);
    }
}));

resultBtnEl.addEventListener("click", function() {
    if (operator === "/" && secondNum === "0") {
        alert("You can't divide by zero, dumbo");
        num2 = undefined;
        calculatioDisplayEl.textContent = calculatioDisplayEl.textContent.slice(0, calculatioDisplayEl.textContent.length -1);
    } else {
        result = +calculate().toFixed(2);
        calculatioDisplayEl.textContent = result;
        resultDisplayEl.textContent = "=" + result;
        console.log("result: ", result);
    }
});

acBtnEl.addEventListener("click", function() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;

    calculatioDisplayEl.textContent = "";
    resultDisplayEl.textContent = "";
});

cBtnEl.addEventListener("click", function() {
})