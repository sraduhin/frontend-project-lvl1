/* eslint-disable no-param-reassign */
import mainConcept from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const descriptionGame = 'What number is missing in the progression?';

const makeRow = (start, increment, length, hidden) => {
  const row = [];
  let hiddenIndex = 0;
  for (let i = 0; i < length; i += 1) {
    if (i === hidden) {
      row.push('..');
      hiddenIndex = start;
      start += increment;
    } else {
      row.push(start);
      start += increment;
    }
  }
  return [row.join(' '), String(hiddenIndex)];
};
const generateRound = () => {
  const startProgression = generateRandomNumber(0, 100);
  const increment = generateRandomNumber(1, 9);
  const lengthProgression = generateRandomNumber(6, 10);
  const hiddenIndex = generateRandomNumber(0, lengthProgression - 1);
  return makeRow(startProgression, increment, lengthProgression, hiddenIndex);
};

const gameBegin = () => mainConcept(descriptionGame, generateRound);

export default gameBegin;
