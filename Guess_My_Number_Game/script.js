'use strict';
/*
Author: Uzzul Hussain
updated on: 08/27/2023
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (tag, message) {
  document.querySelector(tag).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log('Guessed number:', guess);
  if (!guess) {
    displayMessage('.message', 'Please make a guess to check!');
  } else if (guess > 20 || guess < 1) {
    displayMessage('.message', 'Invalid Number, Try Again!');
  } else if (guess === secretNumber) {
    displayMessage('.message', 'WOOHOO, You Guessed Right!!!');
    if (score > highScore) {
      highScore = score;

      displayMessage('.highscore', highScore);
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    displayMessage('.number', secretNumber);
  } else if (guess !== secretNumber) {
    displayMessage(
      '.message',
      guess > secretNumber ? 'Too High, Try Again...' : 'Too Low, Try Again...'
    );
    if (score > 1) {
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'You Lose ... ');
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.message', 'Start guessing...');
  displayMessage('.guess', '');
  displayMessage('.score', score);
  displayMessage('.number', '?');
});
