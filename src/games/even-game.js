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

  const isEvenNumber = () => { //user
    let tries = 3;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (tries > 0) {
      const secretNumber = randomNumber();
      const userAnswer = getAnswer(secretNumber);
      let isEven;

      secretNumber % 2 === 0 ? isEven = 'yes' : isEven = 'no';
      console.log(`Your answer: ${userAnswer}`);
      if (isEven === userAnswer) {
        tries -= 1;
        rightAnswer();
      } else {
        tries = -1;
        wrongAnswer(userAnswer, isEven);
      }
    }
    gameOver(tries, userName); //user
  };

  isEvenNumber(); //userName
};

export default evenGame;
