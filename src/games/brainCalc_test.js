import engine from '../index_test.js';
import getRandomNumber from '../getRandomNumber.js';

const brainCalc_test = () => {
  const descrForCalc = 'What is the result of the expression?';

  const playCalc = () => {
    const randomOperatorArray = ['*', '+', '-'];
    	const randomOperator = randomOperatorArray[getRandomNumber(3)];

   	const randomNumber1 = getRandomNumber(100);
   	const randomNumber2 = getRandomNumber(100);

    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let result = 0;
    switch (randomOperator) {
      case '+':
        result = randomNumber1 + randomNumber2;
        break;
      case '-':
        result = randomNumber1 - randomNumber2;
        break;
      case '*':
        result = randomNumber1 * randomNumber2;
        break;
      default:
        result == null;
    }
    return [question, result.toString()];
  };
  engine(descrForCalc, playCalc);
};

export default brainCalc_test;
