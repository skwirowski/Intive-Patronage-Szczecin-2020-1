import calculatorStore, {
  changeClearEntryState,
  changeOperand,
  changeOperator,
  changeSeparator,
  changeResult,
} from './calculatorStore';

export default function clearOperation(displayElement) {
  changeOperand('firstOperand', '');
  changeSeparator('firstOperandSeparator', false);
  changeOperator('');
  changeOperand('secondOperand', '');
  changeSeparator('secondOperandSeparator', false);
  changeResult(0);
  changeClearEntryState(false);

  displayElement.innerText = calculatorStore.result;
}
