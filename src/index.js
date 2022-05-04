import readlineSync from 'readline-sync';

const rounds = 3;

const mainConcept = (purpose, genRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  console.log(purpose);
  let i = 0;
  while (i < rounds) {
    const [question, correctAnswer] = genRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');// asking for an answer
    console.log(answer, correctAnswer); // delete
    console.log(typeof(answer), typeof(correctAnswer)); //delete
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default mainConcept;
