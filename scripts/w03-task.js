/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function() {
    const number1 = parseFloat(document.querySelector('#subtract1').value);
    const number2 = parseFloat(document.querySelector('#subtract2').value);
    const result = number1 - number2;
    document.querySelector('#difference').value = result;   
  };
  document.querySelector('#subtractNumbers').addEventListener('click', subtract);

/* Arrow Function - Multiply Numbers */
const multiply = () => {
    const factor1 = parseFloat(document.querySelector('#factor1').value);
    const factor2 = parseFloat(document.querySelector('#factor2').value);
    const product = factor1 * factor2;
    document.querySelector('#product').value = product;
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiply);

/* Open Function Use - Divide Numbers */

const divide = function() {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
   
    const quotient = dividend / divisor;
    document.querySelector('#quotient').value = quotient;   
}
document.querySelector('#divideNumbers').addEventListener('click', divide);

/* Decision Structure */

function getTotal(){
    const subtotalInput = document.getElementById('subtotal');
    const membershipCheckbox = document.getElementById('member');
    const totalSpan = document.getElementById('total');

    const subtotal = parseFloat(subtotalInput.value);
    const discount = membershipCheckbox.checked ? 0.2 : 0;
    const totalDue = subtotal - (subtotal * discount);
    totalSpan.textContent = `$${totalDue.toFixed(2)}`
}

document.getElementById('getTotal').addEventListener('click', getTotal);
  
/* ARRAY METHODS - Functional Programming */
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").textContent = arrayNum;
/* Output Odds Only Array */
document.getElementById("odds").textContent = arrayNum.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.getElementById("evens").textContent = arrayNum.filter(number=> number % 2 === 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").textContent = arrayNum.reduce((acc, number) => acc + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").textContent = arrayNum.map (number => number * 2)
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").textContent = arrayNum.map(number => number * 2).reduce((acc, number) => acc + number);