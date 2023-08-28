'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.number').textContent = secretNumber;

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
