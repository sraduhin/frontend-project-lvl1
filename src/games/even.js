import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const gameBegin = () => startGame(descriptionGame, generateRound);

export default gameBegin;
