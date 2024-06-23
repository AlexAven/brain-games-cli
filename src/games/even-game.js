import {
  userNameQuerry,
  randomNumber,
  getAnswer,
  wrongAnswer,
  rightAnswer,
  gameOver,
} from '../index.js';

const evenGame = () => {
  const userName = userNameQuerry();

  const isEvenNumber = () => {
    let triesRemain = 3;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (triesRemain > 0) {
      const secretNumber = randomNumber();
      const userAnswer = getAnswer(secretNumber);
      let isEven;

      secretNumber % 2 === 0 ? isEven = 'yes' : isEven = 'no';
      if (isEven === userAnswer) {
        triesRemain -= 1;
        rightAnswer();
      } else {
        triesRemain = -1;
        wrongAnswer(userAnswer, isEven);
      }
    }
    gameOver(triesRemain, userName);
  };

  isEvenNumber();
};

export default evenGame;
