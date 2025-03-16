import runGame from '../index.js';
import { generateRandomNumber } from '../cli.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(generateRound, gameDescription);
