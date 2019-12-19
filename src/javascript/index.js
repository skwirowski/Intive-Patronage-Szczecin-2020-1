import calculatorStore from './calculatorStore';
import equalitySignOperation from './equalitySignOperation';
import digitButtonOperation from './digitButtonOperation';
import mathOperatorOperation from './mathOperatorOperation';
import clearOperation from './clearOperation';
import floatSeparator from './floatSeparator';
import clearEntryOperation from './clearEntryOperation';

const screen = document.getElementById('screen');
const equalitySignButton = document.getElementById('equality-sign');
const digitButtons = document.querySelectorAll('.grid-items__digit');
const separatorButton = document.getElementById('separator');
const operatorButtons = document.querySelectorAll('.grid-items__operator');
const clearButton = document.getElementById('clear');
const clearEntryButton = document.getElementById('clear-entry');

const setInitialScreenContent = () => {
  screen.innerText = calculatorStore.result;
};

function attachEventListeners() {
  equalitySignButton.addEventListener('click', () => equalitySignOperation(screen));
  digitButtons.forEach(button => {
    button.addEventListener('click', event => digitButtonOperation(event, screen));
  });
  separatorButton.addEventListener('click', event => floatSeparator(event, screen));
  operatorButtons.forEach(button => {
    button.addEventListener('click', event => mathOperatorOperation(event, screen));
  });
  clearButton.addEventListener('click', () => clearOperation(screen));
  clearEntryButton.addEventListener('click', () => clearEntryOperation(screen));
}

setInitialScreenContent();
attachEventListeners();
