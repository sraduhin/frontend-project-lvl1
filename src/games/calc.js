import mainConcept from '../index.js';

const descPurpose = 'What is the result of the expression?';
const genRandomNum = () => Math.ceil(Math.random() * 10); // get random number
const genRandomOp = () => { // get random operator
    //const randomUslovie = (genRandomNum() % 3);
    switch (genRandomNum() % 3) {
        case 0:
            return '+'
        case 1:
            return '-';
        case 2:
            return '*';
    }
}

const genRound = () => {
    const randomNumber1 = genRandomNum();
    const randomNumber2 = genRandomNum();
    const randomOperator = genRandomOp();
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const answer = correctAnswer(randomNumber1, randomNumber2, randomOperator) + '';
    return [question, answer];
};

const correctAnswer = (randomNumber1, randomNumber2, randomOperator) => {
  switch (randomOperator) {
      case '+':
          return (randomNumber1 + randomNumber2)
      case '-':
          return (randomNumber1 - randomNumber2)
      case '*':
          return (randomNumber1 * randomNumber2)
        default:
            break;
  }
};

const gameBegin = () => mainConcept(descPurpose, genRound);

export default gameBegin;