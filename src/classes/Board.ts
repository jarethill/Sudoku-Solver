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

  // Check's each cell to see if the board is valid (no repeated numbers in row/column/subgrid)
  // find is used so method returns as soon as an invalid cell is detected, saving extra iterations
  public isValid() {
    return !this._cells.find((cell) => {
      // Put each cell's row/column/subgrid into it's own array, used so we can loop
      // over them cleanly
      const allCellValues = [cell.row.values, cell.column.values, cell.subgrid.values];

      // Loop over each row/column/subgrid for given cell. Standard for loops used so we can
      // return early if we find an invalid cell
      for (let i = 0; i < allCellValues.length; i += 1) {
        const values = allCellValues[i].filter(((value) => value !== 0));

        // foundValues object is keeping track of repeats in O(1) time
        const foundValues: {[key: number]: boolean} = {};

        // Loop over each specific value in row/column/subgrid
        for (let j = 0; j < values.length; j += 1) {
          const value = values[j];

          if (!foundValues[value]) {
            foundValues[value] = true;
          } else {
            // Return true if a repeat is found, signifying the board is invalid
            return true;
          }
        }
      }

      return false;
    });
  }

  public print() {
    for (let i = 0; i < this._board!.length; i += 1) {
      const row: number[] = [];

      for (let j = 0; j < this._board![i].length; j += 1) {
        row.push(this.getCell(i, j).value);
      }

      // eslint-disable-next-line no-console
      console.log(JSON.stringify(row));
    }
  }

  // Converts board back into a standard number array, like it would be pre-parse.
  // Used for unit testing
  public convert() {
    const convertedBoard: number[][] = [];

    this._board!.forEach((row) => {
      const convertedRow = row.map((cell) => cell.value);
      convertedBoard.push(convertedRow);
    });

    return convertedBoard;
  }

  public solve(x: number = 0, y: number = 0): boolean {
    let row = x;
    let col = y;

    // Stop recursion once final cell is solved
    if (col === this._maxRowSize && row === this._maxRowSize - 1) {
      return true;
    }

    // Move to next row once current row is completed
    if (col === this._maxRowSize) {
      row += 1;
      col = 0;
    }

    const cell = this.getCell(row, col);

    // If current cell is solved, recurse to next cell
    if (cell.isSolved) {
      return this.solve(row, col + 1);
    }

    // Loop through all possible sudoku numbers
    for (let i = 1; i <= 9; i += 1) {
      // If number is solvable (not in Cell's row/column/subgrid)
      if (cell.canSolve(i)) {
        // Solve and recurse into next cell
        cell.solve(i);

        if (this.solve(row, col + 1)) {
          return true;
        }
      }

      // Else unsolve to reset cell to 0
      cell.unSolve();
    }

    return false;
  }

  public static parse(board: Number[][]): Board {
    const boardInstance = new Board();

    // cellBoard holds the cells as a 2D array, used for O(1) lookup of cells
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

    // Make sure board is valid now that all cells are parsed, and throw an exception if it's not
    // Needs to be done before trying to solve board or backtracking algorithm will fail
    if (!boardInstance.isValid()) {
      throw new Error('Board is invalid.');
    }

    return boardInstance;
  }

  // Use static parse method to initialize an instance.
  private constructor() {
    return this;
  }
}
