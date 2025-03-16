import runGame from '../index.js';
import { generateRandomNumber } from '../cli.js';

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) return false;
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

runGame(generateRound, gameDescription);
