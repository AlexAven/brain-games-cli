import { randomNumber, gameLogic } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  if (number !== 1) {
    return true;
  }
  return false;
};

const isPrimeAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const primeGame = () => {
  gameLogic('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeAnswer, randomNumber);
};

export default primeGame;
