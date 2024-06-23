import {
  userNameQuerry,
  randomElementOfArray,
  randomNumber,
  getAnswer,
  wrongAnswer,
  rightAnswer,
  gameOver,
} from '../index.js';

const calcGame = () => {
  const userName = userNameQuerry();
  let triesReamin = 3;

  const calculatings = () => {
    const operators = ['+', '-', '*'];

    console.log('What is the result of the expression?');
    while (triesReamin > 0) {
      const randomOperand1 = randomNumber();
      const randomOperand2 = randomNumber();
      const randomOperator = randomElementOfArray(operators);
      let result;

      switch (randomOperator) {
        case '+':
          result = String(randomOperand1 + randomOperand2);
          break;
        case '-':
          result = String(randomOperand1 - randomOperand2);
          break;
        case '*':
          result = String(randomOperand1 * randomOperand2);
          break;
        default:
          console.log('something went wrong...');
      }
      const userAnswer = getAnswer(`${randomOperand1} ${randomOperator} ${randomOperand2}`);
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
  calculatings();
};

export default calcGame;
