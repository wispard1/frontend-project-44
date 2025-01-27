import { generateRandomNumber, isEven, greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

const playGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;
  let correctCount = 0;

  for (let i = 0; i < rounds; i += 1) {
    const number = generateRandomNumber();
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswers = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswers) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers}'`
      );
    }
  }

  if (correctCount === rounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

playGame();
