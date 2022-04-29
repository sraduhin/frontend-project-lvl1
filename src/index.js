import readlineSync from 'readline-sync';

const rounds = 3;

const greedingByName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const startRound = (round) => {
  const [number, correctAnswer] = round;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');// asking for an answer
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const mainConcept = (purpose, genRound) => {
  const name = greedingByName();
  console.log(purpose);
  let i = 0;
  while (i < rounds) {
    if (startRound(genRound)) {
      i += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${name}`);
};
export default mainConcept;
