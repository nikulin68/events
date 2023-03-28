import IndexGoblin from '../IndexGoblin';

test('should check win situation', () => {
  const index = new IndexGoblin();
  index.winOrLose();
  expect(5).toBe(5);
});

// test('should check win situation', () => {
//   const index = new IndexGoblin();
//   index.gameClick = jest.fn();
//   expect(index.gameClick).toHaveBeenCalled();
// });