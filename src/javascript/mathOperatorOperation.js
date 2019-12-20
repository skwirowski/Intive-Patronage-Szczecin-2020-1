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
  changeOperand('secondOperand', '');
  changeSeparator('secondOperandSeparator', false);
  changeClearEntryState(false);
};

export default function mathOperatorOperation(event, displayElement) {
  const operatorSign = event.target.value;

  if (calculatorStore.operator) {
    changeResult(
      calculateExpression(calculatorStore.firstOperand, calculatorStore.operator, calculatorStore.secondOperand)
    );
    changeOperand('firstOperand', calculatorStore.result);
    changeOperator(operatorSign);
    resetCalculatorEntries();
  } else {
    changeOperator(operatorSign);
    changeClearEntryState(false);
  }
  displayElement.innerText = defaultScreenDisplay();
}
