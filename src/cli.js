import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};
const generateRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};
const isEven = (number) => number % 2 === 0;
export { 
  greetUser, 
  generateRandomNumber, 
  getRandomOperation, 
  isEven 
};
