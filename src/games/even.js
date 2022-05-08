import mainConcept from '../index.js';
import genRandomNum from '../randomNumber.js';

const descPurpose = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const genRound = () => {
  const randomNumber = genRandomNum(0, 100);
  const answer = correctAnswer(randomNumber);
  return [randomNumber, answer];
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;
