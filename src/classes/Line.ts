import Cell from './Cell';

export default class Line {
  private _cells: Cell[] = [];

  public get values() {
    return this._cells.map((cell) => cell.value);
  }

  public get cells() {
    return this._cells;
  }

  public push(cell: Cell) {
    this._cells.push(cell);
  }

  constructor(cells?: Cell[]) {
    if (cells) {
      this._cells = cells;
    }
  }
}
