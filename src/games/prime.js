import mainConcept from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'Answer "yes" if the number is prime, otherwise answer "no".';
const correctAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const answer = String(correctAnswer(randomNumber));
  return [randomNumber, answer];
};

const gameBegin = () => mainConcept(descriptionGame, generateRound);

export default gameBegin;
