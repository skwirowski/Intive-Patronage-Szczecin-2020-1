import calculatorStore, {
  resetClearEntryState,
  defaultScreenDisplay,
  changeOperand,
  changeOperator,
} from './calculatorStore';
import calculateExpression from './calculateExpression';

const { firstOperand, operator, secondOperand, result } = calculatorStore;

const resetCalculatorEntries = () => {
  calculatorStore.firstOperandSeparator = false;
  calculatorStore.secondOperand = '';
  calculatorStore.secondOperandSeparator = false;
  resetClearEntryState();
};

export default function mathOperatorOperation(event, displayElement) {
  const operatorSign = event.target.value;

  if (operator) {
    calculatorStore.result = calculateExpression(firstOperand, operator, secondOperand);

    changeOperand('firstOperand', result);
    changeOperator(operatorSign);
    resetCalculatorEntries();
  } else {
    calculatorStore.operator = operatorSign;
  }
}
/*
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
*/
