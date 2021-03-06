import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};
export const sayHello = rules => console.log(`Welcome to the Brain Games!\n${rules}\n`);
export const checkAnswer = (goal, answer) => goal === answer;
export const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
export const getRandom = (min = 1, max = 100) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const startGame = (gameHeadline, gamePlay) => {
  const userName = getUserName();
  let count = 0;
  while (count < 3) {
    const game = gamePlay(car, cdr);
    const correctAnswer = String(cdr(game));
    const question = car(game);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswer(correctAnswer, answer)) {
      count += 1;
      console.log('Correct!\n');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
