import Cell from './Cell';

export default class Board {
  private _board?: Cell[][];

  private _cells: Cell[] = [];

  private readonly _maxRowSize = 9;

  private readonly _maxBoardSize = this._maxRowSize * this._maxRowSize;

  public get cells() {
    return this._cells;
  }

  public getCell(x: number, y: number) {
    return this._board![x][y];
  }

  public solve(x: number, y: number) {
    // const maxIndex = this._maxRowSize - 1;
    // let row = x;
    // let col = y;

    // if (y === maxIndex && x === maxIndex) {
    //   return true;
    // }

    // if (y === maxIndex) {
    //   row += 1;
    //   col = 0;
    // }

    // if (this._board![])
    return this;
  }

  public static parse(board: Number[][]) {
    const boardInstance = new Board();

    // cellBoard holds the cells as a 2D array, used for O(1) lookup of cells and
    // faster checking of row/cell/subgrid after initial parse
    const cellBoard: Cell[][] = [];
    boardInstance._board = cellBoard;

    // Row/Column/Subgrid maps are used to map X, Y coordinates to their
    // given row/column/subgrid. They are then attached to the cell instance
    // so the cell can easily see which row/column/subgrid it's in.
    const columnMap = new Map<number, Cell[]>();
    const rowMap = new Map<number, Cell[]>();
    const subgridMap = new Map<number, Cell[]>();

    // Prefill keys for row/column maps to ensure correct ordering.
    for (let i = 0; i < board.length; i += 1) {
      columnMap.set(i, []);
      rowMap.set(i, []);
      subgridMap.set(i, []);
    }

    // Keeps track of row length, needed to determine if the 2D array is square.
    let previousRowLength = board[0]?.length;

    for (let x = 0; x < board.length; x += 1) {
      const currentRowLength = board[x]?.length;

      if (!previousRowLength
         || currentRowLength !== previousRowLength
         || currentRowLength !== boardInstance._maxRowSize
      ) {
        throw new Error(`All rows must be even and have a length of ${boardInstance._maxRowSize}.`);
      }

      previousRowLength = currentRowLength;

      cellBoard.push(columnMap.get(x)!);

      for (let y = 0; y < board[x].length; y += 1) {
        const value: number = +board[x][y];

        if (value < 0 || value > 9) {
          throw new RangeError('Board must only contain numbers between 0 and 9.');
        }

        const subgridArea = 3 * Math.floor(y / 3) + Math.floor(x / 3);

        const cell = new Cell(x, y, value, rowMap, columnMap, subgridMap, subgridArea);

        columnMap.get(x)!.push(cell);
        rowMap.get(y)!.push(cell);
        subgridMap.get(subgridArea)!.push(cell);

        boardInstance._cells.push(cell);
      }
    }

    // Board Length check done here because the formula only works if the
    // 2D array is square; which isn't determined until the for loops finish.
    // Optimally this check would be done in the beginning of the method but
    // this way saves having to iterate over the board twice.
    const boardLength = board.length * board[0]?.length;

    if (boardLength !== boardInstance._maxBoardSize) {
      throw new RangeError(
        `This application only supports 3x3 Sudoku boards with 
        ${boardInstance._maxBoardSize} cells. Your board has ${boardLength || 0} cells.`,
      );
    }

    return boardInstance;
  }

  // Use static parse method to initialize an instance.
  private constructor() {
    return this;
  }
}
