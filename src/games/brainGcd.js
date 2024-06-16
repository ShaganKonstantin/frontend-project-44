import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const brainGcd = () => {
  const descrForGcd = 'Find the greatest common divisor of given numbers.';

  const playGcd = () => {
    const randomNumber1 = getRandomNumber(50);
    const randomNumber2 = getRandomNumber(50);

    const question = `${randomNumber1} ${randomNumber2}`;

    const getGcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      const r = a % b;
      return getGcd(b, r);
    };

    const result = getGcd(randomNumber1, randomNumber2);

    const correctAnswer = result;

    return [question, correctAnswer.toString()];
  };
  engine(descrForGcd, playGcd);
};

export default brainGcd;
