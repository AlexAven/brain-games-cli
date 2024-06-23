import {
  userNameQuerry,
  randomNumber,
  getAnswer,
  wrongAnswer,
  rightAnswer,
  gameOver,
} from '../index.js';

const findGdcAlorithm = (integer1, integer2) => {
  while (integer2 !== 0) {
    const remainder = integer1 % integer2;
    integer1 = integer2;
    integer2 = remainder;
  }

  return integer1;
};

const gcdGame = () => {
  const userName = userNameQuerry();
  let triesReamin = 3;

  console.log('Find the greatest common divisor of given numbers.');
  while (triesReamin > 0) {
    const firstInteger = randomNumber();
    const secondInteger = randomNumber();
    const result = String(findGdcAlorithm(firstInteger, secondInteger));
    const userAnswer = getAnswer(`${firstInteger} ${secondInteger}`);

    if (result !== userAnswer) {
      triesReamin = -1;
      wrongAnswer(userAnswer, result);
    } else {
      triesReamin -= 1;
      rightAnswer();
    }
  }
  gameOver(triesReamin, userName);
};

export default gcdGame;
