import readlineSync from 'readline-sync';

const userNameQuerry = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  return name;
};

const randomNumber = () => Math.floor(Math.random() * 100);

const getAnswer = (question) => readlineSync.question(`Question: ${question} `).toLowerCase().trim();

export { userNameQuerry, randomNumber, getAnswer };
