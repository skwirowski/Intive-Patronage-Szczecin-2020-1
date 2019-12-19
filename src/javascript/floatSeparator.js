import calculatorStore, { fillInOperand, changeSeparator, defaultScreenDisplay } from './calculatorStore';

export default function floatSeparator(event, displayElement) {
  const separatorSign = event.target.value;

  if (calculatorStore.operator && !calculatorStore.secondOperandSeparator) {
    fillInOperand('secondOperand', separatorSign);
    changeSeparator('secondOperandSeparator', true);
  } else if (!calculatorStore.operator && !calculatorStore.firstOperandSeparator) {
    fillInOperand('firstOperand', separatorSign);
    changeSeparator('firstOperandSeparator', true);
  }

  displayElement.innerText = defaultScreenDisplay();
}
