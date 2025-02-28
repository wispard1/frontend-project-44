import { generateRandomNumber } from '../index.js';

export const generateRound = () => {
  const number = generateRandomNumber();
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';
