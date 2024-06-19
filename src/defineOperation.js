const defineOperation = (operator, number1, number2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error('Неизвестный оператор');
  }
  return result;
};

export default defineOperation;
