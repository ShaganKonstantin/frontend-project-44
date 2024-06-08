import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const playBrainEven = () => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const attemptsCount = 0;
    let correctAnswerCount = 0;

    while (correctAnswerCount < 3 && attemptsCount < 3) {
      const randomNumber = getRandomNumber(0, 50);
      console.log(`Question: ${randomNumber}`);

      const reply = readlineSync.question('Your answer: ');

      if (randomNumber % 2 === 0 && reply === 'yes') {
        console.log('Correct!');
        correctAnswerCount += 1;
      } else if (randomNumber % 2 === 0 && reply === 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
        correctAnswerCount = 0;
      } else if (randomNumber % 2 !== 0 && reply === 'no') {
        console.log('Correct!');
        correctAnswerCount += 1;
      } else if (randomNumber % 2 !== 0 && reply === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
        correctAnswerCount = 0;
      } else if (reply !== 'yes' && reply !== 'no') {
        console.log(`${reply} is wrong answer, try again`);
        correctAnswerCount = 0;
      }
    }

    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${name}`);
    }
  };
  playBrainEven();
};

export default brainEven;
