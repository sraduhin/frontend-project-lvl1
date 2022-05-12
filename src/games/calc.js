import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'What is the result of the expression?';

const correctAnswer = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(0, 50);
  const randomNumber2 = generateRandomNumber(0, 11);
  const randomOperator = '+-*'[generateRandomNumber(0, 2)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(correctAnswer(randomNumber1, randomNumber2, randomOperator));
  return [question, answer];
};

const gameBegin = () => startGame(descriptionGame, generateRound);

export default gameBegin;
