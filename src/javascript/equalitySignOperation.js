import calculatorStore, {
  changeClearEntryState,
  defaultScreenDisplay,
  changeOperand,
  changeOperator,
  changeSeparator,
  changeResult,
} from './calculatorStore';
import calculateExpression from './calculateExpression';

const resetCalculatorEntries = () => {
  changeSeparator('firstOperandSeparator', false);
  changeOperator('');
  changeOperand('secondOperand', '');
  changeSeparator('secondOperandSeparator', false);
  changeClearEntryState(false);
};

export default function equalitySignOperation(displayElement) {
  changeResult(
    calculateExpression(calculatorStore.firstOperand, calculatorStore.operator, calculatorStore.secondOperand)
  );
  changeOperand('firstOperand', calculatorStore.result);
  resetCalculatorEntries();

  displayElement.innerText = defaultScreenDisplay();
}
