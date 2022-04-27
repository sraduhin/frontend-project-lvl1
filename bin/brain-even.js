import readlineSync from 'readline-sync';

const greedingByName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

// greedingByName();

const correctAnswer = (number) => {
  return (number % 2 === 0) ? 'yes' : 'no';
}

const isCorrect = (answer, number) => {
  return (answer === correctAnswer(number)) ? true : false;
}

const startRound = () => {
  const randomNumber = Math.ceil(Math.random() * 100);// get random number
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');// asking for an answer
  if (isCorrect(answer, randomNumber)) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(randomNumber)}'`);
    return false;
  }
}
const evenGame = () => {
  const name = greedingByName();
  const rounds = 3;
  let i = 0;
  while (i < rounds) {
    if (startRound()) {
      i++;
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
  
  return;
}

evenGame();
