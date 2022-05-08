import readlineSync from 'readline-sync';
import greedingByName from './cli.js';

const rounds = 3;

const mainConcept = (purpose, genRound) => {
  const userName = greedingByName();
  console.log(purpose);
  let i = 0;
  while (i < rounds) {
    const [question, correctAnswer] = genRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');// asking for an answer
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default mainConcept;
