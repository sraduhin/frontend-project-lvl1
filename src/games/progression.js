/* eslint-disable no-param-reassign */
import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'What number is missing in the progression?';

const makeRow = (first, step, length) => {
  const row = [];
  for (let i = 0; i < length; i += 1) {
    const current = first + step * i;
    row.push(current);
  }
  return row.join(' ');
};
const generateRound = () => {
  const startProgression = generateRandomNumber(0, 100);
  const stepProgression = generateRandomNumber(1, 9);
  const lengthProgression = generateRandomNumber(6, 10);
  const hiddenIndex = generateRandomNumber(0, lengthProgression - 1);
  const progression = makeRow(startProgression, stepProgression, lengthProgression);
  const correctAnswer = String(startProgression + stepProgression * hiddenIndex);
  const question = String(progression.replace(correctAnswer, '..'));
  return [question, correctAnswer];
};

const gameBegin = () => startGame(descriptionGame, generateRound);

export default gameBegin;
