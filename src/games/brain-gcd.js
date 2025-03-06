import runGame from '../index.js';
import { generateRandomNumber } from '../cli.js';

export const findGCD = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

export const generateRound = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();
  return { question, correctAnswer };
};

export const gameDescription =
  'Find the greatest common divisor of given numbers.';

runGame(generateRound, gameDescription);
