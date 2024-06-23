import readlineSync from 'readline-sync';

const userNameQuerry = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  return name;
};

const randomNumber = () => Math.floor(Math.random() * 101);

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ').toLowerCase().trim();
};

const wrongAnswer = (userAnswer, rightAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};

const rightAnswer = () => console.log('Correct!');

const gameOver = (tries, user) => {
  if (tries < 0) {
    console.log(`Let's try again, ${user}!`);
  } else {
    console.log(`Congratulations, ${user}!`);
  }
};

export {
  userNameQuerry,
  randomNumber,
  getAnswer,
  wrongAnswer,
  rightAnswer,
  gameOver,
};
