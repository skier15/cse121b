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
document.getElementById('getTotalDue').addEventListener('click', function() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const applyDiscount = document.getElementById('member').checked;

    let totalDue = subtotal;
    if (applyDiscount) {
        totalDue *= 0.8; 
    }

    document.getElementById('total').textContent = `Total Due: $${totalDue.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
