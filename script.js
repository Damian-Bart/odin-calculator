const exprArray = [];

function storeExpression(expr) {
    exprArray.push(expr);
}

const buttonOne = document.getElementById('1');
const buttonTwo = document.getElementById('2');
const buttonThree = document.getElementById('3');
const buttonFour = document.getElementById('4');
const buttonFive = document.getElementById('5');
const buttonSix = document.getElementById('6');
const buttonSeven = document.getElementById('7');
const buttonEight = document.getElementById('8');
const buttonNine = document.getElementById('9');
const buttonZero = document.getElementById('0');

const buttonPlus = document.getElementById('+');
const buttonMinus = document.getElementById('-');
const buttonMultiply = document.getElementById('*');
const buttonDivide = document.getElementById('/');
const buttonEquals = document.getElementById('=');

buttonOne.addEventListener('click', () => storeExpression(1));
buttonTwo.addEventListener('click', () => storeExpression(2));
buttonThree.addEventListener('click', () => storeExpression(3));
buttonFour.addEventListener('click', () => storeExpression(4));
buttonFive.addEventListener('click', () => storeExpression(5));
buttonSix.addEventListener('click', () => storeExpression(6));
buttonSeven.addEventListener('click', () => storeExpression(7));
buttonEight.addEventListener('click', () => storeExpression(8));
buttonNine.addEventListener('click', () => storeExpression(9));
buttonZero.addEventListener('click', () => storeExpression(0));