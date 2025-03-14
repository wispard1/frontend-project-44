import runGame from "../index.js";
import { generateRandomNumber } from "../cli.js";

const generateProgression = () => {
  const length = generateRandomNumber(5, 10);
  const firstNumber = generateRandomNumber(1, 10);
  const difference = generateRandomNumber(1, 5);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + i * difference);
  }
  return progression;
};

const hideElement = (progression) => {
  const hiddenIndex = generateRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];

  const hiddenProgression = [...progression];
  hiddenProgression[hiddenIndex] = "..";

  const hiddenProgressionString = hiddenProgression.join(" ");
  const hiddenValueString = hiddenValue.toString();

  return {
    hiddenProgressionString,
    hiddenValueString,
  };
};

const generateRound = () => {
  const progression = generateProgression();
  const { hiddenProgressionString, hiddenValueString } = hideElement(progression);

  const question = hiddenProgressionString;
  const correctAnswer = hiddenValueString;

  return { question, correctAnswer };
};

const gameDescription = "What number is missing in the progression?";

runGame(generateRound, gameDescription);
