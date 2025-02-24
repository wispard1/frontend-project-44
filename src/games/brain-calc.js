export const generateRound = () => {
  let num1 = Math.floor(Math.random() * 50) + 1;
  let num2 = Math.floor(Math.random() * 50) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

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
        throw new Error('Недопустимая операция');
    }
  };

  const correctAnswer = calculate(num1, num2, operation).toString();
  return { question, correctAnswer };
};

export const gameDescription = 'What is the result of the expression?';
