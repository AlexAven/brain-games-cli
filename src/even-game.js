import readlineSync from 'readline-sync';

let userName;

const nameQuerry = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');

  return console.log(`Hello, ${userName}!`);
};

const isEvenNumber = () => {
  let tries = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (tries > 0) {
    const secretNumber = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${secretNumber} `).toLowerCase().trim();
    let isEven;

    secretNumber % 2 === 0 ? isEven = 'yes' : isEven = 'no';
    console.log(`Your answer: ${userAnswer}`);
    if (isEven === userAnswer) {
      tries -= 1;
      console.log('Correct!');
    } else {
      tries = -1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was "${isEven}".`);
    }
  }

  tries < 0 ? console.log(`Let's try again, ${userName}!`) : console.log(`Congratulations, ${userName}!`);
};

export { nameQuerry, isEvenNumber };
