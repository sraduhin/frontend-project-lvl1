import mainConcept from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const answer = String(correctAnswer(randomNumber));
  return [randomNumber, answer];
};

const gameBegin = () => mainConcept(descriptionGame, generateRound);

export default gameBegin;
