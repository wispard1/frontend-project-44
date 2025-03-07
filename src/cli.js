import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const generateRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const isEven = (number) => number % 2 === 0;
