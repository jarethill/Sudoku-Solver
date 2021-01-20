import Row from './Row';
import Column from './Column';
import Subgrid from './Subgrid';

export default class Cell {
  private _x: number;

  private _y: number;

  private _value: number;

  private _row: Row;

  private _column: Column;

  private _subgrid: Subgrid;

  private _isSolved = false;

  get isSolved() {
    return this._isSolved;
  }

  get row() {
    return this._row;
  }

  get column() {
    return this._column;
  }

  get subgrid() {
    return this._subgrid;
  }

  get value() {
    return this._value;
  }

  public get x() {
    return this._x;
  }

  public get y() {
    return this._y;
  }

  public unSolve() {
    this._value = 0;
    this._isSolved = false;
  }

  public canSolve(number: number) {
    // Set used to avoid having to manually remove duplicates
    const impossibleNumbers = new Set<number>([
      ...this._row.values,
      ...this._column.values,
      ...this._subgrid.values,
    ]);

    if (!impossibleNumbers.has(number)) {
      return true;
    }

    return false;
  }

  public solve(number: number): void {
    this._value = number;
    this._isSolved = true;
  }

  constructor(
    x: number,
    y: number,
    value: number,
    rowMap: Map<number, Cell[]>,
    columnMap: Map<number, Cell[]>,
    subgridMap: Map<number, Cell[]>,
    subgridArea: number,
  ) {
    if (value > 0) {
      this._isSolved = true;
    }

    this._x = x;
    this._y = y;
    this._value = value;

    this._column = new Column(rowMap.get(y)!);
    this._row = new Row(columnMap.get(x)!);
    this._subgrid = new Subgrid(subgridMap.get(subgridArea)!);
  }
}
