import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const brainEven_test = () => {
    const descrForEven = 'Answer "yes" if the number is even, otherwise answer "no".';

    const playEven = () => {
        const randomNumber = getRandomNumber(50);

        const question = `${randomNumber}`;

        if (randomNumber % 2 === 0 && reply === 'yes' || randomNumber % 2 !== 0 && reply === 'no') {
            result = correctAnswer; 
        } else {
            return;
        }
        return [question, result];
    }
engine(descrForEven, playEven);
};

export default brainEven_test;