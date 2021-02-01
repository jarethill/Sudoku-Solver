export default class BoardError extends Error {
  private _invalidCellCoordinates: [number, number];

  get invalidCellCoordinates() {
    return this._invalidCellCoordinates;
  }

  constructor(message: string, invalidCellCoordinatess: [number, number]) {
    super(message);
    this._invalidCellCoordinates = invalidCellCoordinatess;
  }
}
