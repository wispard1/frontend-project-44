export const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';
