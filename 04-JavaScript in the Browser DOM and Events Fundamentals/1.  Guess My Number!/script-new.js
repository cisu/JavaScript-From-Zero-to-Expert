const playAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');

let scoreGame = 20;
let highscoreGame = 0;

number.value = Math.floor(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  const guessInput = Number(guess.value);
  // console.log(guessInput, typeof guessInput);
  console.log(`scoreGame: ${scoreGame}
highscoreGame: ${highscoreGame}`);

  // Check if user doesn't input a number
  if (!guessInput) {
    message.textContent = '⛔ No number';
  }
  // if the player win
  else if (guessInput === number.value) {
    message.textContent = '🏆 You win';
    number.textContent = number.value;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (highscoreGame < scoreGame) {
      highscore.textContent = scoreGame;
    } else {
      highscore.textContent = highscoreGame;
    }
  }
  // if the player guess wrong
  else if (guessInput !== number.value) {
    if (scoreGame > 1) {
      message.textContent = guessInput > number.value ? 'too high' : 'too low';
      score.textContent = --scoreGame;
    } else {
      message.textContent = '😢 You lost the game, try again!';
    }
  }
});

// Play Again
playAgain.addEventListener('click', function () {
  scoreGame = 20;
  highscoreGame = highscore.textContent;
  score.textContent = scoreGame;
  number.value = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  message.textContent = 'Start guessing...';
});
