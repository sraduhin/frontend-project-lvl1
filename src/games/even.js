import mainConcept from '../index.js';

const descPurpose = 'Answer "yes" if the number is even, otherwise answer "no".';
const genRandomNum = () => Math.ceil(Math.random() * 100); // get random number

const genRound = () => {
    const randomNumber = genRandomNum();
    const answer = correctAnswer(randomNumber);
    return [randomNumber, answer];
};

const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;
