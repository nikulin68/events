/* eslint-disable no-plusplus */
export default class Game {
    constructor(boardEl) {
      this.boardEl = boardEl;
      this.boardsCells = [];
      this.random = 0;
    }
  
    createBoard(cage) {
      const boardEl = document.getElementById('board');
      boardEl.classList.add('cursor');
      for (let i = 0; i < cage; i++) {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');
        boardEl.appendChild(cell);
        this.randomImg();
      }
    }
  
    randomImg() {
      setInterval(() => {
        this.boardsCells = [...document.querySelectorAll('.game-cell')];
        this.boardsCells.forEach((elem) => {
          if (elem.classList.contains('image')) {
            elem.classList.remove('image');
          }
        });
        const random = Math.floor(Math.random() * this.boardsCells.length);
        return this.boardsCells[random].classList.add('image');
      }, 1000);
    }
  }