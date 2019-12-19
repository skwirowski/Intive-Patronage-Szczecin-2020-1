import calculatorStore, { changeOperand } from './calculatorStore';
import calculateExpression from './calculateExpression';

const resetCalculatorEntries = () => {
  calculatorStore.firstOperandSeparator = false;
  calculatorStore.operator = '';
  calculatorStore.secondOperand = '';
  calculatorStore.secondOperandSeparator = false;
  calculatorStore.entryCleared = false;
};

export default function equalitySignOperation(displayElement) {
  const { firstOperand, operator, secondOperand, result } = calculatorStore;

  calculateExpression(firstOperand, operator, secondOperand);

  displayElement.innerText = result;
  changeOperand('firstOperand', result);

  resetCalculatorEntries();
  console.log(calculatorStore);
}
