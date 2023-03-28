// TODO: write code here

import Game from './Game';
import IndexGoblin from './IndexGoblin';

const gamesBoard = new Game();
gamesBoard.createBoard(16);

const indGob = new IndexGoblin();
indGob.renderApp();
indGob.gameClick();