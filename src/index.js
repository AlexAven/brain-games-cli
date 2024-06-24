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

const gameOver = (tries, user) => {
  if (tries < 0) {
    console.log(`Let's try again, ${user}!`);
  } else {
    console.log(`Congratulations, ${user}!`);
  }
};

const gameLogic = (gameRules, callBack, ...callBackArgs) => {
  const userName = userNameQuerry();
  let triesRemain = 3;

  console.log(`${gameRules}`);
  while (triesRemain > 0) {
    const updatedArgs = callBackArgs.map(item => item());
    const result = callBack(...updatedArgs);
    const userAnswer = getAnswer([...updatedArgs].join(' '));

    if (result === userAnswer) {
      triesRemain -= 1;
      console.log('Correct!');
    } else {
      triesRemain = -1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
    }
  }
  gameOver(triesRemain, userName);
};

export { randomNumber, gameLogic };
