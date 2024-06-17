import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const brainEven = () => {
  const descrForEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const playEven = () => {
    const randomNumber = getRandomNumber(50);

    const question = `${randomNumber}`;

    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    const correctAnswer = isEven;

    return [question, correctAnswer];
  };
  engine(descrForEven, playEven);
};

export default brainEven;
