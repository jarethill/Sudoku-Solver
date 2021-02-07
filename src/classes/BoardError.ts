export default class BoardError extends Error {
  private _invalidCellCoordinates: Array<[number, number]>;

  get invalidCellCoordinates() {
    return this._invalidCellCoordinates;
  }

  constructor(message: string, invalidCellCoordinatess: Array<[number, number]>) {
    super(message);
    this._invalidCellCoordinates = invalidCellCoordinatess;
  }
}
