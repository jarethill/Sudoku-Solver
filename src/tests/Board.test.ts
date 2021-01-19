import Board from '../classes/Board';
import Cell from '../classes/Cell';
import { simplePuzzle } from '../data/puzzles';

const board = Board.parse(simplePuzzle);

describe('can initialize a board', () => {
  it('should exist', () => {
    expect(board).toBeInstanceOf(Board);
    expect(board).toBeTruthy();
  });

  it('should have correct properties', () => {
    expect(Board).toHaveProperty('parse');
    expect(board).toHaveProperty('_maxRowSize', 9);
    expect(board).toHaveProperty('_maxBoardSize', 81);
    expect(board).toHaveProperty('cells');
    expect(board).toHaveProperty('getCell');
  });

  it('should have correct amount of cells', () => {
    expect(board.cells.length).toBe(81);
  });

  it('should be able to grab cells', () => {
    const cellOne = board.getCell(0, 0);
    const cellTwo = board.getCell(5, 6);
    const cellThree = board.getCell(4, 4);

    expect(cellOne).toBeInstanceOf(Cell);

    expect(cellOne?.value).toBe(5);
    expect(cellTwo?.value).toBe(8);
    expect(cellThree?.value).toBe(0);

    expect(cellTwo?.isSolved).toBe(true);
    expect(cellThree?.isSolved).toBe(false);
  });
});

describe('board throws errors correctly on parse', () => {
  it('should error on uneven board length', () => {
    const testBoard = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(() => Board.parse(testBoard)).toThrow();
  });

  it('should error with uneven or not supported row lengths', () => {
    const testBoard = [
      [1, 2, 5, 6],
      [3, 4, 5, 3, 4, 9],
      [5, 6, 3, 1],
      [5, 6, 3, 1],
    ];

    expect(() => Board.parse(testBoard)).toThrow('All rows must be even and have a length of 9.');
  });

  it('should error if a value outside 0-9 is passed', () => {
    const testBoard = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, -1, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 0, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    const testTwoBoard = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 10, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 0, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    expect(() => Board.parse(testBoard)).toThrow('Board must only contain numbers between 0 and 9.');
    expect(() => Board.parse(testTwoBoard)).toThrow('Board must only contain numbers between 0 and 9.');
  });
});
