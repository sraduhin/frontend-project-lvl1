import mainConcept from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'What is the result of the expression?';
const generateRandomOperator = () => { // get random operator
  switch (generateRandomNumber(0, 10) % 3) {
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

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(0, 50);
  const randomNumber2 = generateRandomNumber(0, 11);
  const randomOperator = generateRandomOperator();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(correctAnswer(randomNumber1, randomNumber2, randomOperator));
  return [question, answer];
};

const gameBegin = () => mainConcept(descriptionGame, generateRound);

export default gameBegin;
