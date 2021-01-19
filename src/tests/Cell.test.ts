import Cell from '../classes/Cell';
import Board from '../classes/Board';
import { simplePuzzle } from '../data/puzzles';

const board = Board.parse(simplePuzzle);

describe('can initialize a cell', () => {
  const x = 0;
  const y = 2;
  const value = 8;
  const rowMap = new Map<number, Cell[]>();
  const columnMap = new Map<number, Cell[]>();
  const subgridMap = new Map<number, Cell[]>();
  const subgridArea = 0;
  const isSolved = true;

  const cell = new Cell(x, y, value, rowMap, columnMap, subgridMap, subgridArea);

  it('should exist', () => {
    expect(cell).toBeInstanceOf(Cell);
    expect(cell).toBeTruthy();
  });

  it('should have correct properties', () => {
    expect(cell).toHaveProperty('y', y);
    expect(cell).toHaveProperty('x', x);
    expect(cell).toHaveProperty('value', value);
    expect(cell).toHaveProperty('isSolved', isSolved);
    expect(cell).toHaveProperty('solve');
  });

  it('should have correct values/rows/columns/subgrids', () => {
    const cellOne = board.getCell(0, 0);
    const cellTwo = board.getCell(5, 7);
    const cellThree = board.getCell(8, 6);

    expect(cellOne?.value).toBe(5);
    expect(cellTwo?.value).toBe(5);
    expect(cellThree?.value).toBe(1);

    expect(cellOne?.row.values).toStrictEqual([5, 3, 4, 6, 7, 8, 9, 1, 2]);
    expect(cellOne?.column.values).toStrictEqual([5, 6, 1, 8, 4, 7, 9, 2, 3]);
    expect(cellOne?.subgrid.values).toStrictEqual([5, 3, 4, 6, 7, 2, 1, 9, 8]);

    expect(cellTwo?.row.values).toStrictEqual([7, 1, 3, 9, 2, 4, 8, 5, 6]);
    expect(cellTwo?.column.values).toStrictEqual([1, 4, 6, 2, 9, 5, 8, 3, 7]);
    expect(cellTwo?.subgrid.values).toStrictEqual([4, 2, 3, 7, 9, 1, 8, 5, 6]);

    expect(cellThree?.row.values).toStrictEqual([3, 4, 5, 2, 8, 6, 1, 7, 9]);
    expect(cellThree?.column.values).toStrictEqual([9, 3, 5, 4, 7, 8, 2, 6, 1]);
    expect(cellThree?.subgrid.values).toStrictEqual([2, 8, 4, 6, 3, 5, 1, 7, 9]);
  });
});
