import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import getRandomNumberInc from '../getRandomNumberInc.js';

const brainProgression = () => {
  const descrForProgression = 'What number is missing in the progression?';

  const playProgression = () => {
    const result = [];

    const length = getRandomNumberInc(5, 10);
    const start = getRandomNumber(100);
    const step = getRandomNumberInc(2, 4);

    for (let i = 0; i < length; i += 1) {
      result.push(start + i * step);
    }

    const randomIndex = getRandomNumber(result.length);
    const randomArrayItem = result[randomIndex];

    result.splice(randomIndex, 1, '...');
    const question = `${result}`;

    const correctAnswer = randomArrayItem;

    return [question, correctAnswer.toString()];
  };
  engine(descrForProgression, playProgression);
};

export default brainProgression;
