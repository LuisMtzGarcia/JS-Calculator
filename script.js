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

const digits = document.querySelectorAll('.digit');
const firstNumber = document.querySelector('.first-number');

/**
 * Displays the selected digit or operation in the selected display.
 * @param {DOM Element} display 
 * @param {DOM Element} value 
 */
function populateDisplay(display, value) {
    display.textContent += value.textContent;
}

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        populateDisplay(firstNumber, digit);
    })
});