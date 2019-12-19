import calculatorStore from './calculatorStore';
import equalitySignOperation from './equalitySignOperation';

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
// const calculationComponents = {
//   firstOperand: '',
//   firstOperandSeparator: false,
//   operator: '',
//   secondOperand: '',
//   secondOperandSeparator: false,
//   result: 0,
//   entryCleared: false,
// };

screen.innerText = calculatorStore.result;

// document.addEventListener('keyup', event => {
//   digitButtons.forEach(button => {
//     if (button.value === event.key) console.log(event.key);
//   });
// });
// *
// * HELPER FUNCTIONS
// *
// const calculateExpression = (a, b, c) => {
//   const calc = {
//     '+': () => Number(a) + Number(c),
//     '-': () => Number(a) - Number(c),
//     '*': () => Number(a) * Number(c),
//     '/': () => Number(a) / Number(c),
//   };
//   return calc[b]();
// };

// *
// * EQUALITY SIGN
// *
// equalitySign.addEventListener('click', () => {
//   calculationComponents.result = calculateExpression(
//     calculationComponents.firstOperand,
//     calculationComponents.operator,
//     calculationComponents.secondOperand
//   );
//   screen.innerText = calculationComponents.result;

//   calculationComponents.firstOperand = calculationComponents.result;
//   calculationComponents.firstOperandSeparator = false;
//   calculationComponents.operator = '';
//   calculationComponents.secondOperand = '';
//   calculationComponents.secondOperandSeparator = false;
//   calculationComponents.entryCleared = false;

//   console.log(calculationComponents);
// });

// *
// * DIGIT BUTTONS
// *
// digitButtons.forEach(button => {
//   button.addEventListener('click', event => {
//     const digit = event.target.value;
//     if (calculationComponents.operator) {
//       calculationComponents.secondOperand += digit;
//     } else if (!calculationComponents.firstOperand) {
//       calculationComponents.firstOperand = digit;
//     } else {
//       calculationComponents.firstOperand += digit;
//     }

//     console.log(calculationComponents);
//     calculationComponents.entryCleared = false;
//     screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
//   });
// });

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
      calculationComponents.firstOperandSeparator = false;
      calculationComponents.operator = operatorSign;
      calculationComponents.secondOperand = '';
      calculationComponents.secondOperandSeparator = false;
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
  calculationComponents.firstOperandSeparator = false;
  calculationComponents.operator = '';
  calculationComponents.secondOperand = '';
  calculationComponents.secondOperandSeparator = false;
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
      calculationComponents.secondOperandSeparator = false;
      screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
    } else if (calculationComponents.operator) {
      calculationComponents.operator = '';
      screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
    } else {
      calculationComponents.firstOperand = calculationComponents.result;
      calculationComponents.firstOperandSeparator = false;
      screen.innerText = calculationComponents.firstOperand;
    }

    calculationComponents.entryCleared = true;
  }
  console.log(calculationComponents);
});

// *
// * FLOAT NUMBERS SEPARATOR
// *
separator.addEventListener('click', event => {
  const separatorSign = event.target.value;
  if (calculationComponents.operator && !calculationComponents.secondOperandSeparator) {
    calculationComponents.secondOperand += separatorSign;
    calculationComponents.secondOperandSeparator = true;
  } else if (!calculationComponents.operator && !calculationComponents.firstOperandSeparator) {
    calculationComponents.firstOperand += separatorSign;
    calculationComponents.firstOperandSeparator = true;
  }
  screen.innerText = `${calculationComponents.firstOperand}${calculationComponents.operator}${calculationComponents.secondOperand}`;
});

// TODO: operacje zmiennoprzecinkowe zaokrąglanie wyników
// TODO: obsługa błędów przy operacjach matematycznych (brak lub niekompletne parametry)
// TODO: rozwiązać problem za dużej liczby znaków na wyświetlaczu
