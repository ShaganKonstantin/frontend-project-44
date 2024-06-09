#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let correctAnswerCount = 0;
  const attemptsCount = 0;

  while (correctAnswerCount < 3 && attemptsCount < 3) {
    const randomOperatorArray = ['*', '+', '-'];
    const randomOperator = randomOperatorArray[getRandomNumber(3)];

    const randomNumber1 = getRandomNumber(100);
    const randomNumber2 = getRandomNumber(100);

    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const reply = readlineSync.questionInt('Your answer: ');
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

    if (reply === result) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else if (reply !== result) {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
      correctAnswerCount = 0;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default brainCalc;
