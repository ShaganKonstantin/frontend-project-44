import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import defineOperation from '../defineOperation.js';

const brainCalc = () => {
  const descrForCalc = 'What is the result of the expression?';

  const playCalc = () => {
    const randomOperatorArray = ['*', '+', '-'];
    const randomOperator = randomOperatorArray[getRandomNumber(3)];

    const randomNumber1 = getRandomNumber(100);
    const randomNumber2 = getRandomNumber(100);

    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    return [question, defineOperation(randomOperator, randomNumber1, randomNumber2).toString()];
  };
  engine(descrForCalc, playCalc);
};

export default brainCalc;
