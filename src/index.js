import readlineSync from "readline-sync";

const runGame = (generateRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  const rounds = 3;
  let correctCount = 0;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = generateRound(); // eslint-disable-line comma-dangle
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (correctCount === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
