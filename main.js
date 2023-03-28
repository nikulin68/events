/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/playing-area/playing-area.js

class PlayingArea {
  // constructor(element) {
  //   this._element = element;
  // }

  randomMovingGoblin() {
    const goblinImg = document.createElement('img');
    goblinImg.classList.add('playing-area__img');
    goblinImg.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';
    const playingItemsCollection = document.querySelectorAll('.playing-area__item');
    for (const playingItem of playingItemsCollection) {
      if (playingItem.firstElementChild) {
        playingItem.firstElementChild.remove();
      }
    }
    const randomPlayingItem = Math.floor(Math.random() * playingItemsCollection.length);
    playingItemsCollection[randomPlayingItem].append(goblinImg);
  }
}
;// CONCATENATED MODULE: ./src/components/end-game/end-game.js
function endGame() {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal_open');
}
;// CONCATENATED MODULE: ./src/components/user-click/user-click.js

function userClick(timerId) {
  const playingItemsCollection = document.querySelectorAll('.playing-area__item');
  const userPoints = document.querySelector('.user-got-points__number');
  let userFailPoints = 0;
  for (const playingItem of playingItemsCollection) {
    playingItem.addEventListener('click', e => {
      // console.log(e.target.className);

      if (e.target.className === 'playing-area__img') {
        userPoints.textContent = +userPoints.textContent + 1;
      } else {
        userFailPoints++;
        // console.log(userFailPoints);
        if (userFailPoints >= 5) {
          endGame();
          clearTimeout(timerId);
        }
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


document.addEventListener('DOMContentLoaded', () => {
  const playingArea = new PlayingArea(document.querySelector('.playing-area'));
  const randomMovingGoblinTimerId = setInterval(playingArea.randomMovingGoblin, 1000);
  userClick(randomMovingGoblinTimerId);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;