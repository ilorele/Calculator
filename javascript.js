let firstNum;
let secondNum;
let operator;
let result;

const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operatorsArr = ["+", "-", "*", "/"];

const numBtnsEl = document.querySelectorAll(".num-btn");
const operatorBtnsEl = document.querySelectorAll(".operator-btn");
const resultBtnEl = document.querySelector(".result-btn");

const acBtnEl = document.querySelector(".Ac-btn");
const cBtnEl = document.querySelector(".C-btn");
const dotBtnEl = document.querySelector(".dot-btn");

const calculatioDisplayEl = document.querySelector(".calculation-display");
const resultDisplayEl = document.querySelector(".result-display");



function assignNum(digit) {
    if (operator === undefined) {
        if (firstNum === undefined) {
            firstNum = digit;
        } else {
            firstNum += digit;
        }
        
        console.log("first number: " + firstNum);
        calculatioDisplayEl.textContent += digit;
    } else {
        if (secondNum === undefined) {
            secondNum = digit;
        } else {
            secondNum += digit;
        }

        console.log("second number: " + secondNum);
        calculatioDisplayEl.textContent += digit;
    }
}

function assignOperator(newOperator) {
    if (operator && !secondNum) {
        operator = newOperator;
        calculatioDisplayEl.textContent = calculatioDisplayEl.textContent.slice(0, calculatioDisplayEl.textContent.length -1);
        calculatioDisplayEl.textContent += operator;
        console.log("operator: " + operator);
    } else if (operator) {
        result = calculate();
        firstNum = result;
        secondNum = undefined;
        operator = newOperator;
        calculatioDisplayEl.textContent = result + operator;
        resultDisplayEl.textContent = "=" + result;
    } else {
        operator = newOperator;
        calculatioDisplayEl.textContent += operator;
        console.log("operator: " + operator);
    }
}

function assignDecimalPoint(decimalPoint) {
    if (!firstNum || (firstNum && operator && !secondNum)) {
        assignNum("0.");
    } else if ((!secondNum && firstNum.includes(".")) || (firstNum && operator && secondNum.includes("."))) {
        alert("You can't put more than one decimal point per number!");
    } else {
        assignNum(decimalPoint);
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
    if (operator === "/" && (secondNum === "0" || secondNum === "0.")) {
        alert("You can't divide by zero, dumbo");
        calculatioDisplayEl.textContent = calculatioDisplayEl.textContent.slice(0, calculatioDisplayEl.textContent.length -secondNum.length);
        secondNum = undefined;
        return firstNum;
    } else {
        switch (operator) {
            case "+":
                result = add(firstNum, secondNum);
                break;
            case "-":
                result = substract(firstNum, secondNum);
                break;
            case "*":
                result = multiply(firstNum, secondNum);
                break;
            case "/":
                result = divide(firstNum, secondNum);
                break;
        }

        return +result.toFixed(2);
    }
}

function displayResult() {
    result = calculate();

    if (secondNum === undefined) {
        calculatioDisplayEl.textContent = firstNum + operator;
    } else {
        calculatioDisplayEl.textContent = firstNum + operator + secondNum;
    }

    resultDisplayEl.textContent = "=" + result;
    console.log("result: ", result);
}

function cancelLastDigit() {
    if (operator && !secondNum) {
        operator = undefined;
    } else if (secondNum) {
        secondNum = secondNum.slice(0, secondNum.length - 1);
        console.log(secondNum)
    } else if (firstNum && !operator && !secondNum) {
        firstNum = firstNum.slice(0, firstNum.length -1);
    }

    calculatioDisplayEl.textContent = calculatioDisplayEl.textContent.slice(0, calculatioDisplayEl.textContent.length -1);
}

function clearAll() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;

    calculatioDisplayEl.textContent = "";
    resultDisplayEl.textContent = "";
}



numBtnsEl.forEach((btn) => btn.addEventListener("click", function() {
    assignNum(this.textContent);
}))

dotBtnEl.addEventListener("click", function() {
    assignDecimalPoint(this.textContent);
})

operatorBtnsEl.forEach((element) => element.addEventListener("click", function() {
    assignOperator(this.textContent);
}))

resultBtnEl.addEventListener("click", function() {
    displayResult();
})

acBtnEl.addEventListener("click", function() {
    clearAll();
})

cBtnEl.addEventListener("click", function() {
    cancelLastDigit();
})

document.addEventListener("keydown", function(event) {
    if (numbersArr.includes(+event.key)) {
        assignNum(event.key);
    }

    if (operatorsArr.includes(event.key)) {
        assignOperator(event.key);
    }
    
    if (event.key === ".") {
        assignDecimalPoint(event.key);
    }

    if (event.key === "Backspace") {
        cancelLastDigit();
    }

    if (event.key === "Enter" || event.key === "=") {
        displayResult();
    }

    if (event.key === "Escape") {
        clearAll();
    }
})