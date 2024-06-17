import engine from '../index.js';
import getRandomNumberInc from '../getRandomNumberInc.js';

const brainPrime = () => {
  const descrForPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const playPrime = () => {
    const number = getRandomNumberInc(2, 20);

    const question = number;

    const isPrime = () => {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };

    const correctAnswer = isPrime();

    return [question, correctAnswer];
  };
  engine(descrForPrime, playPrime);
};

export default brainPrime;
