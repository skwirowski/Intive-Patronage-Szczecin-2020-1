const calculateExpression = (firstNum, mathOperator, secondNum) => {
  const firstOperand = firstNum || '1';
  const operator = mathOperator || '*';
  const secondOperand = secondNum || '1';

  const calculation = {
    '+': () => Number(firstOperand) + Number(secondOperand),
    '-': () => Number(firstOperand) - Number(secondOperand),
    '*': () => Number(firstOperand) * Number(secondOperand),
    '/': () => Number(firstOperand) / Number(secondOperand),
    '^': () => Number(firstOperand) ** Number(secondOperand),
    '√': () => Number(firstOperand) ** 1 / Number(secondOperand),
  };

  return calculation[operator]();
};

export default calculateExpression;
