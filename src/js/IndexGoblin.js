export default class IndexGoblin {
    constructor() {
      this.point = 0;
      this.goblins = 0;
      this.randomNumber = null;
      this.gameField = [];
    }
  
    renderApp() {
      this.gameField = document.getElementById('board');
      const points = document.createElement('div');
      const goblin = document.createElement('div');
      goblin.classList.add('goblin', 'points');
      points.classList.add('point', 'points');
      this.gameField.insertAdjacentElement('beforeBegin', points);
      points.insertAdjacentElement('afterend', goblin);
      document.querySelector('.points').textContent = 'Ваши баллы:';
      document.querySelector('.goblin').textContent = 'Ваши промахи:';
    }
  
    gameClick() {
      this.gameCells = [...document.querySelectorAll('.game-cell')];
      this.gameCells.forEach((elem) => {
        elem.addEventListener('click', () => {
          if (elem.classList.contains('image')) {
            this.point += 1;
            document.querySelector('.points').textContent = `Ваши баллы: ${this.point}`;
            this.winOrLose();
          } else if (!elem.classList.contains('image')) {
            this.goblins += 1;
            document.querySelector('.goblin').textContent = `Ваши промахи: ${this.goblins}`;
            this.winOrLose();
          }
        });
      });
    }
  
    winOrLose() {
      if (this.goblins > 4) {
        const lost = document.createElement('div');
        lost.classList.add('result');
        this.gameField.insertAdjacentElement('afterend', lost);
        document.querySelector('.result').textContent = `Вы проиграли! ${this.goblins} промахов`;
        this.goblins = 0;
        this.point = 0;
      }
      if (this.point > 6) {
        const win = document.createElement('div');
        win.classList.add('resultWin');
        this.gameField.insertAdjacentElement('afterend', win);
        document.querySelector('.resultWin').textContent = `Это честная победа! ${this.point} очков`;
        this.goblins = 0;
        this.point = 0;
      }
    }
  }