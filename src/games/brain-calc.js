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

  const calculate = (a, b, op) => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        throw new Error(`Недопустимая операция: "${op}"`);
    }
  };

  const correctAnswer = calculate(num1, num2, operation).toString();
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

runGame(generateRound, gameDescription);
