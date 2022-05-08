/* eslint-disable no-param-reassign */
import mainConcept from '../index.js';
import genRandomNum from '../randomNumber.js';

const descPurpose = 'What number is missing in the progression?';

const makeRow = (start, increment, length, hidden) => {
  let row = [];
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
  return [row.join(' '), hiddenIndex];
};
const genRound = () => {
  const startProgression = genRandomNum(0, 100);
  const increment = genRandomNum(1, 9);
  const lengthProgression = genRandomNum(6, 10);
  const hiddenIndex = genRandomNum(0, lengthProgression - 1);
  return makeRow(startProgression, increment, lengthProgression, hiddenIndex);
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;
