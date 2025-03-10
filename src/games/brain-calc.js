import runGame from '../index.js';
import { generateRandomNumber, getRandomOperation } from '../cli.js';

const generateRound = () => {
  const operation = getRandomOperation();
  let num1 = generateRandomNumber(1, 10);
  let num2 = generateRandomNumber(1, 10);

  if (operation === '-' && num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  const question = `${num1} ${operation} ${num2}`;

  const calculate = (num1, num2, operation) => {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error(`Недопустимая операция: "${operation}"`);
    }
  };

  const correctAnswer = calculate(num1, num2, operation).toString();
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

runGame(generateRound, gameDescription);
