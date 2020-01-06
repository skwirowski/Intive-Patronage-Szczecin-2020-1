import calculatorStore, {
  changeClearEntryState,
  changeOperand,
  changeOperator,
  changeSeparator,
  defaultScreenDisplay,
} from './calculatorStore';

export default function clearEntryOperation(displayElement) {
  if (!calculatorStore.entryCleared) {
    if (calculatorStore.secondOperand) {
      changeOperand('secondOperand', '');
      changeSeparator('secondOperandSeparator', false);
      displayElement.innerText = defaultScreenDisplay();
    } else if (calculatorStore.operator) {
      changeOperator('');
      displayElement.innerText = defaultScreenDisplay();
    } else {
      changeOperand('firstOperand', calculatorStore.result);
      changeSeparator('firstOperandSeparator', false);
      displayElement.innerText = calculatorStore.firstOperand;
    }
    changeClearEntryState(true);
  }
}
