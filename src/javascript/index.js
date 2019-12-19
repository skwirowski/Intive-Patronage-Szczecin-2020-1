const screen = document.getElementById('screen');
const clear = document.getElementById('clear');
const clearEntry = document.getElementById('clear-entry');
const equalitySign = document.getElementById('equality-sign');
const separator = document.getElementById('separator');
const digitButtons = document.querySelectorAll('.grid-items__digit');
const operatorButtons = document.querySelectorAll('.grid-items__operator');

// *
// * CALCULATOR STATE
// *
const calculationComponents = {
  firstOperand: '',
  operator: '',
  secondOperand: '',
  result: 0,
  entryCleared: false,
};

screen.innerText = calculationComponents.result;

// document.addEventListener('keyup', event => {
//   digitButtons.forEach(button => {
//     if (button.value === event.key) console.log(event.key);
//   });
// });
// *
// * HELPER FUNCTIONS
// *
const calculateExpression = (a, b, c) => {
  const calc = {
    '+': () => Number(a) + Number(c),
    '-': () => Number(a) - Number(c),
    '*': () => Number(a) * Number(c),
    '/': () => Number(a) / Number(c),
  };
  return calc[b]();
};

// *
// * EQUALITY SIGN
// *
equalitySign.addEventListener('click', () => {
  calculationComponents.result = calculateExpression(
    calculationComponents.firstOperand,
    calculationComponents.operator,
    calculationComponents.secondOperand
  );
  screen.innerText = calculationComponents.result;

  calculationComponents.firstOperand = calculationComponents.result;
  calculationComponents.operator = '';
  calculationComponents.secondOperand = '';
  // calculationComponents.result = '';
  calculationComponents.entryCleared = false;

  console.log(calculationComponents);
});

// *
// * DIGIT BUTTONS
// *
digitButtons.forEach(button => {
  button.addEventListener('click', event => {
    const digit = event.target.value;
    if (calculationComponents.operator) {
      calculationComponents.secondOperand += digit;
    } else {
      calculationComponents.firstOperand += digit;
    }

    // console.log(calculationComponents);
    calculationComponents.entryCleared = false;
    screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
  });
});

// *
// * MATHEMATICAL OPERATORS
// *
operatorButtons.forEach(button => {
  button.addEventListener('click', event => {
    const operatorSign = event.target.value;
    if (calculationComponents.operator) {
      calculationComponents.result = calculateExpression(
        calculationComponents.firstOperand,
        calculationComponents.operator,
        calculationComponents.secondOperand
      );

      calculationComponents.firstOperand = calculationComponents.result;
      calculationComponents.operator = operatorSign;
      calculationComponents.secondOperand = '';
      // calculationComponents.result = '';
      calculationComponents.entryCleared = false;
    } else {
      calculationComponents.operator = operatorSign;
      console.log(calculationComponents);
    }

    screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
  });
});

// *
// * CLEAR BUTTON
// *
clear.addEventListener('click', () => {
  calculationComponents.firstOperand = '';
  calculationComponents.operator = '';
  calculationComponents.secondOperand = '';
  calculationComponents.result = 0;
  calculationComponents.entryCleared = false;

  screen.innerText = calculationComponents.result;
});

// *
// * CLEAR ENTRY BUTTON
// *
clearEntry.addEventListener('click', () => {
  if (!calculationComponents.entryCleared) {
    if (calculationComponents.secondOperand) {
      calculationComponents.secondOperand = '';
      screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
    } else if (calculationComponents.operator) {
      calculationComponents.operator = '';
      screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
    } else {
      calculationComponents.firstOperand = calculationComponents.result;
      // calculationComponents.result = 0;
      screen.innerText = calculationComponents.firstOperand;
    }

    calculationComponents.entryCleared = true;
  }
  console.log(calculationComponents);
});
