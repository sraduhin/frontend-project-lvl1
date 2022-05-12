import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const gameBegin = () => startGame(descriptionGame, generateRound);

export default gameBegin;
