const calculatorStore = {
  firstOperand: '',
  firstOperandSeparator: false,
  operator: '',
  secondOperand: '',
  secondOperandSeparator: false,
  result: 0,
  entryCleared: false,
};

export const changeClearEntryState = state => {
  calculatorStore.entryCleared = state;
};

export const changeOperand = (objectKey, objectEntry) => {
  calculatorStore[objectKey] = objectEntry;
};

export const fillInOperand = (objectKey, objectEntry) => {
  calculatorStore[objectKey] += objectEntry;
};

export const changeOperator = operator => {
  calculatorStore.operator = operator;
};

export const changeSeparator = (objectKey, objectEntry) => {
  calculatorStore[objectKey] = objectEntry;
};

export const changeResult = result => {
  calculatorStore.result = result;
};

export const defaultScreenDisplay = () =>
  `${calculatorStore.firstOperand}${calculatorStore.operator}${calculatorStore.secondOperand}`;

export default calculatorStore;
