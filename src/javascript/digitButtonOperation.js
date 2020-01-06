import calculatorStore, {
  fillInOperand,
  changeClearEntryState,
  defaultScreenDisplay,
  changeOperand,
} from './calculatorStore';

export default function digitButtonOperation(event, displayElement) {
  const digit = event.target.value;

  if (calculatorStore.operator) {
    fillInOperand('secondOperand', digit);
  } else if (!calculatorStore.firstOperand) {
    changeOperand('firstOperand', digit);
  } else {
    fillInOperand('firstOperand', digit);
  }
  changeClearEntryState(false);

  displayElement.innerText = defaultScreenDisplay();
}
