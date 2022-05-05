import mainConcept from '../index.js';
import genRandomNum from '../randomNumber.js';

const descPurpose = 'Find the greatest common divisor of given numbers.';

const genRound = () => {
    const randomNumber1 = genRandomNum(0, 100);
    const randomNumber2 = genRandomNum(0, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const answer = correctAnswer(randomNumber1, randomNumber2);
    return [question, answer];
};

const correctAnswer = (randomNumber1, randomNumber2) => {
    if (randomNumber2 === 0) {
        return randomNumber1;
    } return correctAnswer(randomNumber2, randomNumber1 % randomNumber2)
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;
