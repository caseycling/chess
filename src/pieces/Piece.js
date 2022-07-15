export default class Piece {
  constructor(color, pointValue) {
    this.color = color;
    this.pointValue = pointValue;
  }

  movementSquares() {
    return [];
  }

  attackSquares() {
    return [];
  }
}
