'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log('Guessed number:', guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please make a guess to check!';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Invalid Number, Try Again!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'WOOHOO, You Guessed Right!!!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High, Try Again...';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lose ... ';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low, Try Again...';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lose ... ';
    }
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
