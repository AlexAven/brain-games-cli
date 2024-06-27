import gameLogic from '../index.js';
import randomNumber from '../getRandomNumber.js';

const findGdcAlorithm = (int1, int2) => {
  let integer1 = int1;
  let integer2 = int2;
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
