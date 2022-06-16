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
    } else {
        const header = document.createElement('h1');
        header.classList.add("operator");
        header.textContent += value.textContent
        display.appendChild(header);
        firstValue = parseInt(header.previousElementSibling.textContent);
    }
}

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
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
