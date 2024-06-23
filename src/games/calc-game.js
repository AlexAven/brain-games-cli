import {
  userNameQuerry,
  randomNumber,
  getAnswer,
  wrongAnswer,
  rightAnswer,
  gameOver,
} from '../index.js';

const calculatings = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return String(operand1 + operand2);
    case '-':
      return String(operand1 - operand2);
    case '*':
      return String(operand1 * operand2);
    default:
      return console.log('something went wrong...');
  }
};

const randomElementOfArray = (array) => array[Math.floor(Math.random() * (array.length - 1))];

const calcGame = () => {
  const userName = userNameQuerry();
  const operators = ['+', '-', '*'];
  let triesReamin = 3;

  console.log('What is the result of the expression?');
  while (triesReamin > 0) {
    const randomOperand1 = randomNumber();
    const randomOperand2 = randomNumber();
    const randomOperator = randomElementOfArray(operators);
    const result = calculatings(randomOperand1, randomOperator, randomOperand2);
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

export default calcGame;
