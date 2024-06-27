import gameLogic from '../index.js';
import randomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const isEvenAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  gameLogic('Answer "yes" if the number is even, otherwise answer "no".', isEvenAnswer, randomNumber);
};

export default evenGame;
