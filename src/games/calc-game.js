import { randomNumber, gameLogic } from '../index.js';

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

const randomElementOfArray = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calcGame = () => {
  gameLogic('What is the result of the expression?', calculatings, randomNumber, randomElementOfArray, randomNumber);
};

export default calcGame;
