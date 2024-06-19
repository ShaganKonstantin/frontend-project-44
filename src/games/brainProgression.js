import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import getRandomNumberInc from '../getRandomNumberInc.js';
import generateProgression from '../generateProgression.js';

const brainProgression = () => {
  const descrForProgression = 'What number is missing in the progression?';

  const playProgression = () => {
    const result = generateProgression(
      getRandomNumber(100),
      getRandomNumberInc(5, 10),
      getRandomNumberInc(2, 4),
    );

    const randomIndex = getRandomNumber(result.length);
    const randomArrayItem = result[randomIndex];

    result.splice(randomIndex, 1, '..');

    const question = result.join(' ');

    const correctAnswer = randomArrayItem;

    return [question, correctAnswer.toString()];
  };
  engine(descrForProgression, playProgression);
};

export default brainProgression;
