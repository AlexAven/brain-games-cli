import { randomNumber, gameLogic } from '../index.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  gameLogic('Answer "yes" if the number is even, otherwise answer "no".', isEvenNumber, randomNumber);
};

export default evenGame;
