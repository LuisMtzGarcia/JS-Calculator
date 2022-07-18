/**
 * Receives two numbers and adds them.
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function sum(a, b) {
    return a + b;
}

/**
 * Receives two numbers and subtracts them.
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Receives two numbers and multiplies them.
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Receives two numbers and divides them.
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function divide(a, b) {
    return a / b;
}

/**
 * Receives a function and two parameters.
 * Passes these two parameters to the function.
 * @param {function} func 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function operate(func, a, b) {
    return func(a, b);
}

/**
 * Populates the operand part of the display.
 * If the last element was an operator, creates an operand section of the
 * display.
 * Else, it concatenates the value of the button press into this display.
 * @param {button} value 
 */
function displayOperand(value) {
    if (display.childNodes.length === 0 || 
        display.lastChild.className !== 'operand') {
        createOperand(value);
    } else {
        display.lastChild.textContent += value.textContent;
    }
}

/**
 * Creates the operand part of the display.
 * @param {button} value 
 */
function createOperand(value) {
    const header = document.createElement('h1');
    header.classList.add("operand");
    header.textContent += value.textContent;
    display.appendChild(header);
}

/**
 * Populates the operator part of the display.
 * Stores the first operand in firstValue, global variable.
 * @param {button} value 
 */
function displayOperator(value) {
    if (display.childNodes.length === 0) {
        alert("You have to first enter a number.");
    } else if (display.lastChild.className === 'operator') {
        alert("Cannot place an operator after an operator.");
    }  else {
        const header = document.createElement('h1');
        header.classList.add("operator");
        header.textContent += value.textContent
        display.appendChild(header);
        firstValue = parseInt(header.previousElementSibling.textContent);
    }
}

/**
 * Calls the calculateResult function and appends the result to the display.
 */
function displayResult() {
    let displayElements = [...display.children];
    let result = calculateResult(displayElements);

    const equalsSign = document.createElement('h1');
    equalsSign.classList.add("result");
    equalsSign.textContent += '=';
    display.appendChild(equalsSign);

    const displayResult = document.createElement('h1');
    displayResult.classList.add("operand");
    displayResult.textContent += result;
    display.appendChild(displayResult);
}

/**
 * Calculates the result of the operation based on the display's elements.
 * @param {*} elements 
 * @returns 
 */
function calculateResult(elements) {
    let result;
    let lastValue;
    elements.forEach(element => {
        if (element.className === 'operand') {
            if (lastValue) {
                let currentValue = parseInt(element.textContent);
                if (element.previousElementSibling.className === 'operator') {
                    let operator = element.previousElementSibling.textContent;
                    if (operator === '+') {
                        result = sum(lastValue, currentValue);
                    } else if (operator === '-') {
                        result = subtract(lastValue, currentValue);
                    } else if (operator === 'x') {
                        result = multiply(lastValue, currentValue);
                    } else if (operator === '÷') {
                        result = divide(lastValue, currentValue);
                    }
                    lastValue = result;
                }
            } else {
                lastValue = parseInt(element.textContent);
            }
        }
    })
    return result;
}

function clearDisplay() {
    display.textContent = '';
}

let display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const clear = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
let operations = [...document.querySelector('.operations').children];
let firstValue;

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        displayOperand(digit);
    })
});

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        displayOperator(operation);
    })
})

clear.addEventListener('click', () => {
    clearDisplay();
})

equalsButton.addEventListener('click', () => {
    displayResult();
})
