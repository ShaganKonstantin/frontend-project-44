import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let attemptsCount = 0;
let correctAnswerCount = 0;

while (correctAnswerCount < 3 && attemptsCount < 3) {
  const randomNumber = getRandomNumber(0, 50);
  console.log(`Question: ${randomNumber}`);

  const reply = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0 && reply === 'yes') {
    console.log('Correct!');
    correctAnswerCount += 1;
  } else if (randomNumber % 2 === 0 && reply === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`Let's try again, ${name}`);
    attemptsCount += 1;
  } else if (randomNumber % 2 !== 0 && reply === 'no') {
    console.log('Correct!');
    correctAnswerCount += 1;
  } else if (randomNumber % 2 !== 0 && reply === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}`);
    attemptsCount += 1;
  } else if (reply !== 'yes' && reply !== 'no') {
    console.log(`${reply} is wrong answer, try again`);
    attemptsCount += 1;
  }
};

if (correctAnswerCount === 3) {
  console.log(`Congratulations, ${name}`);
}
