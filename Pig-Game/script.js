'use strict';
//Global variables
let currentScore = 0;
const totalScore = [0, 0];

//getting Players
let activePlayer = 0;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//getting score elements
const score0Elm = document.getElementById('score--0');
let current0Elm = document.getElementById('current--0');
const score1Elm = document.getElementById('score--1');
let current1Elm = document.getElementById('current--1');
const diceElm = document.querySelector('.dice');

//getting buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

score0Elm.textContent = 0;
score1Elm.textContent = 0;
diceElm.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const diceScore = Math.trunc(Math.random() * 6) + 1;
  console.log(`rolled ${diceScore}`);
  diceElm.classList.remove('hidden');
  diceElm.src = `dice-${diceScore}.png`;

  if (diceScore !== 1) {
    currentScore += diceScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  totalScore[activePlayer] += currentScore;
  score0Elm.textContent = totalScore[0];
  score1Elm.textContent = totalScore[1];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
});
