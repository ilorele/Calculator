let firstNum;
let secondNum;
let operator;
let result;

const numBtnsEl = document.querySelectorAll(".num-btn");
const operatorBtnsEl = document.querySelectorAll(".operator-btn");
const resultBtnEl = document.querySelector(".result-btn");

const acBtnEl = document.querySelector(".Ac-btn");
const cBtnEl = document.querySelector(".C-btn");
const dotBtnEl = document.querySelector(".dot-btn");

const calculatioDisplayEl = document.querySelector(".calculation-display");
const resultDisplayEl = document.querySelector(".result-display");



function assignNum(btn) {
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
    }
}

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
    assignNum(this);
}))

dotBtnEl.addEventListener("click", function() {
    if ((!secondNum && firstNum.includes(".")) || (firstNum && operator && secondNum.includes("."))) {
        alert("You can't put more than one decimal per number!");
    } else {
        assignNum(this);
    }
})

operatorBtnsEl.forEach((element) => element.addEventListener("click", function() {
    if (operator && !secondNum) {
        operator = this.textContent;
        calculatioDisplayEl.textContent = calculatioDisplayEl.textContent.slice(0, calculatioDisplayEl.textContent.length -1);
        calculatioDisplayEl.textContent += operator;
        console.log("operator: " + operator);
    } else if (operator) {
        result = calculate();
        firstNum = result;
        secondNum = undefined;
        operator = this.textContent;
        calculatioDisplayEl.textContent = result + operator;
    } else {
        operator = this.textContent;
        calculatioDisplayEl.textContent += operator;
        console.log("operator: " + operator);
    }
}))

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
})

acBtnEl.addEventListener("click", function() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;

    calculatioDisplayEl.textContent = "";
    resultDisplayEl.textContent = "";
})

cBtnEl.addEventListener("click", function() {
    calculatioDisplayEl.textContent = calculatioDisplayEl.textContent.slice(0, calculatioDisplayEl.textContent.length -1);

    if (operator && !secondNum) {
        operator = undefined;
    } else if (secondNum) {
        secondNum = secondNum.slice(0, secondNum.length - 1);
        console.log(secondNum)
    } else if (firstNum && !operator && !secondNum) {
        firstNum = firstNum.slice(0, firstNum.length -1);
    }
})