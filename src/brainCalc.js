import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const brainCalc = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;
  const attemptsCount = 0;

  while (correctAnswersCount < 3 && attemptsCount < 3) {
    const randomOperatorArray = ['*', '+', '-'];

    const randomIndex = Math.floor(Math.random() * (randomOperatorArray.length));
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const randomOperator = randomOperatorArray[randomIndex];

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

    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const reply = readlineSync.questionInt('Your answer: ');
    if (reply === result) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (reply !== result) {
      console.log(`${reply} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      correctAnswersCount = 0;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default brainCalc;
