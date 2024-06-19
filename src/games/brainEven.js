import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import isEven from '../isEven.js';

const brainEven = () => {
  const descrForEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const playEven = () => {
    const randomNumber = getRandomNumber(50);

    const question = randomNumber;

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  engine(descrForEven, playEven);
};

export default brainEven;
