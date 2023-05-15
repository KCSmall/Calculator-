let screen = document.getElementById('screen');
let operand1 = '';
let operand2 = '';
let operator = '';

function addNumber(num) {
  if (operator === '') {
    operand1 += num;
    screen.value = operand1;
  } else {
    operand2 += num;
    screen.value = operand2;
  }
}

function addOperator(op) {
  operator = op;
}

function clearScreen() {
  screen.value = '';
  operand1 = '';
  operand2 = '';
  operator = '';
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseInt(operand1) + parseInt(operand2);
      break;
    case '-':
      result = parseInt(operand1) - parseInt(operand2);
      break;
    case '*':
      result = parseInt(operand1) * parseInt(operand2);
      break;
    case '/':
      result = parseInt(operand1) / parseInt(operand2);
      break;
  }
  screen.value = result;
  operand1 = result.toString();
  operand2 = '';
  operator = '';
}
