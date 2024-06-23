import {
  userNameQuerry,
  randomNumber,
  getAnswer,
  wrongAnswer,
  rightAnswer,
  gameOver,
} from '../index.js';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const userName = userNameQuerry();
  let triesRemain = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (triesRemain > 0) {
    const secretNumber = randomNumber();
    const userAnswer = getAnswer(secretNumber);
    const result = isEvenNumber(secretNumber);

    if (result === userAnswer) {
      triesRemain -= 1;
      rightAnswer();
    } else {
      triesRemain = -1;
      wrongAnswer(userAnswer, result);
    }
  }
  gameOver(triesRemain, userName);
};

export default evenGame;
