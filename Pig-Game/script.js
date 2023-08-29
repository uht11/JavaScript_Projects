'use strict';
/*
Author: Uzzul Hussain
update date: 08/29/23
*/
//Global variables
let currentScore, totalScore, playing, activePlayer;

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

const init = function () {
  currentScore = 0;
  totalScore = [0, 0];
  playing = true;
  activePlayer = 0;
  score0Elm.textContent = 0;
  score1Elm.textContent = 0;
  diceElm.classList.add('hidden');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

score0Elm.textContent = 0;
score1Elm.textContent = 0;
diceElm.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing === true) {
    const diceScore = Math.trunc(Math.random() * 6) + 1;
    console.log(`rolled ${diceScore}`);
    diceElm.classList.remove('hidden');
    diceElm.src = `dice-${diceScore}.png`;

    if (diceScore !== 1) {
      currentScore += diceScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      switchPlayer();
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing === true) {
    totalScore[activePlayer] += currentScore;
    score0Elm.textContent = totalScore[0];
    score1Elm.textContent = totalScore[1];

    if (totalScore[activePlayer] > 99) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      console.log(`Player ${activePlayer + 1} won!!`);
      playing = false;
      currentScore = 0;
    } else {
      currentScore = 0;
      switchPlayer();
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
});

btnNew.addEventListener('click', init);
