import runGame from '../index.js';
import { generateRandomNumber, isEven } from '../cli.js';

const generateRound = () => {
  const number = generateRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question: `${number}`, correctAnswer };
};

export const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

runGame(generateRound, gameDescription);
