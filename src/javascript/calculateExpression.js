const calculateExpression = (firstOperand, operator, secondOperand) => {
  const calculation = {
    '+': () => Number(firstOperand) + Number(secondOperand),
    '-': () => Number(firstOperand) - Number(secondOperand),
    '*': () => Number(firstOperand) * Number(secondOperand),
    '/': () => Number(firstOperand) / Number(secondOperand),
  };
  return calculation[operator]();
};

export default calculateExpression;
