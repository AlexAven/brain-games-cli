import { randomNumber, gameLogic } from '../index.js';

const isPrimeNumber = (number) => {
  let isPrime;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = 'no';
      return isPrime;
    }
  }
  if (number !== 1) {
    isPrime = 'yes';
  } else {
    isPrime = 'no';
  }

  return isPrime;
};

const primeGame = () => {
  gameLogic('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeNumber, randomNumber);
};

export default primeGame;
