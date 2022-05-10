import mainConcept from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const correctAnswer = (randomNumber1, randomNumber2) => {
  if (randomNumber2 === 0) {
    return randomNumber1;
  }
  return correctAnswer(randomNumber2, randomNumber1 % randomNumber2);
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(correctAnswer(randomNumber1, randomNumber2));
  return [question, answer];
};

const gameBegin = () => mainConcept(descriptionGame, generateRound);

export default gameBegin;
