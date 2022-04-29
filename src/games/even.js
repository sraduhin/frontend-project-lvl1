import mainConcept from '../index.js';

const descPurpose = 'What is the result of the expression?';
const genRandomNum = () => Math.ceil(Math.random() * 100); // get random number

const genRound = () => {
    const randomNumber = genRandomNum();
    const answer = correctAnswer(randomNumber);
    return [randomNumber, answer];
}
const gameBegin = () => {
    mainConcept(descPurpose, genRound());
}

export const correctAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};

export default gameBegin;
