import mainConcept from '../index.js';
import genRandomNum from '../randomNumber.js';

const descPurpose = 'What is the result of the expression?';
const genRandomOp = () => { // get random operator
  switch (genRandomNum(0, 10) % 3) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      break;
  }
  return false; // 5:Expected to return a value at the end of arrow function.eslintconsistent-return
};

const correctAnswer = (randomNumber1, randomNumber2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return (randomNumber1 + randomNumber2);
    case '-':
      return (randomNumber1 - randomNumber2);
    case '*':
      return (randomNumber1 * randomNumber2);
    default:
      break;
  }
  return false; // 28:Expected to return a value at the end of arrow function.eslint
};

const genRound = () => {
  const randomNumber1 = genRandomNum(0, 50);
  const randomNumber2 = genRandomNum(0, 11);
  const randomOperator = genRandomOp();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = correctAnswer(randomNumber1, randomNumber2, randomOperator);
  return [question, answer];
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;
