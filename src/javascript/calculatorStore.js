const calculatorStore = {
  firstOperand: '',
  firstOperandSeparator: false,
  operator: '',
  secondOperand: '',
  secondOperandSeparator: false,
  result: 0,
  entryCleared: false,
};

export const resetClearEntryState = () => {
  calculatorStore.entryCleared = false;
};

export const changeOperand = (objectKey, objectEntry) => {
  calculatorStore[objectKey] = objectEntry;
};

export const changeOperator = operator => {
  calculatorStore.operator = operator;
};

export const defaultScreenDisplay = () =>
  `${calculatorStore.firstOperand}${calculatorStore.operator}${calculatorStore.secondOperand}`;

export default calculatorStore;
