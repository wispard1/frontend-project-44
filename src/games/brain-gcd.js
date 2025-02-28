import { generateRandomNumber } from '../index.js';

export const findGCD = (a, b) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
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
