import calculatorStore, { resetClearEntryState, defaultScreenDisplay, changeOperand } from './calculatorStore';

const { operator, firstOperand } = calculatorStore;

const fillInSecondOperand = digit => {
  calculatorStore.secondOperand += digit;
};

const fillInFirstOperand = digit => {
  calculatorStore.firstOperand += digit;
};

export default function digitButtonOperation(event, displayElement) {
  const digit = event.target.value;

  if (operator) {
    fillInSecondOperand(digit);
  } else if (!firstOperand) {
    changeOperand('firstOperand', digit);
  } else {
    fillInFirstOperand(digit);
  }

  console.log(calculatorStore);
  resetClearEntryState();

  displayElement.innerText = defaultScreenDisplay;
}
