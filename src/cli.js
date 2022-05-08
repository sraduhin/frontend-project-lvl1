import readlineSync from 'readline-sync';

const greedingByName = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greedingByName;
