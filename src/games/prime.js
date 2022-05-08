import mainConcept from '../index.js';
import genRandomNum from '../randomNumber.js';

const descPurpose = 'Answer "yes" if the number is prime, otherwise answer "no".';
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

const genRound = () => {
  const randomNumber = genRandomNum(0, 100);
  const answer = correctAnswer(randomNumber);
  return [randomNumber, answer];
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;
