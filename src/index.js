import readlineSync from 'readline-sync';

const engine = (description, game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const questionAndAnswer = game();
    console.log('Question:', String(questionAndAnswer[0]));
    const reply = readlineSync.question('Your answer: ');

    const correctAnswer = questionAndAnswer[1];

    if (reply === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${reply}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
