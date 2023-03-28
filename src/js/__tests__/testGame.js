import Game from '../Game';

test('Should check if a variable is undefined', () => {
  const gamesBoardNew = new Game();
  expect(gamesBoardNew).toBeDefined();
});

// test('should generate array of div`s hole', () => {
//     const gamesBoardNew = new Game();
//     gamesBoardNew.randomImg();
// const board = [...document.querySelectorAll('.game-cell')];
//     expect(board.length).toBe(16);
// });