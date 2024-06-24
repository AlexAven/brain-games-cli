import { randomNumber, gameLogic } from '../index.js';

const findGdcAlorithm = (integer1, integer2) => {
  while (integer2 !== 0) {
    const remainder = integer1 % integer2;
    integer1 = integer2;
    integer2 = remainder;
  }

  return String(integer1);
};

const gcdGame = () => {
  gameLogic('Find the greatest common divisor of given numbers.', findGdcAlorithm, randomNumber, randomNumber);
};

export default gcdGame;