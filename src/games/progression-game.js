import { randomNumber, gameLogic } from '../index.js';

const createSequence = () => {
  const sequnceFirstElement = randomNumber();
  const sequenceStep = Math.floor(Math.random() * 5) + 1;
  const sequenceLength = Math.floor(Math.random() * 5) + 6;
  const randomIndex = Math.floor(Math.random() * sequenceLength);
  const sequence = [];

  for (let item = sequnceFirstElement, counter = 0;
    counter < sequenceLength - 1; item += sequenceStep, counter += 1) {
    sequence.push(item);
  }
  sequence[randomIndex] = '..';
  return sequence;
};

const findGuessedNumber = (array) => {
  const numberIndex = array.indexOf('..');
  let sequenceStep;
  let guessedNumber;

  if (numberIndex === 0) {
    sequenceStep = array[2] - array[1];
  } else if (numberIndex === array.length - 1) {
    sequenceStep = array[array.length - 2] - array[array.length - 3];
  } else {
    sequenceStep = (array[numberIndex + 1] - array[numberIndex - 1]) / 2;
  }

  if (numberIndex === 0) {
    guessedNumber = array[1] - sequenceStep;
  } else if (numberIndex === array.length - 1) {
    guessedNumber = array[array.length - 2] + sequenceStep;
  } else {
    guessedNumber = array[numberIndex - 1] + sequenceStep;
  }

  return String(guessedNumber);
};
const progressionGame = () => {
  gameLogic('What number is missing in the progression?', findGuessedNumber, createSequence);
};

export default progressionGame;
