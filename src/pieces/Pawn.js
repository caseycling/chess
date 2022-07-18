import Piece from './Piece.js';

export default class Pawn extends Piece {
  constructor(color, pointvalue) {
    super(color, pointvalue);
    this.hasMoved = false;
  }

  movementSquares() {
    let moves = [
      { row: this.row + 1, col: this.col },
      !this.hasMoved && { row: this.row + 2, col: this.col },
    ];

    moves.filter();

    return moves;
  }

  attackSquares() {
    let moves = [
      { row: this.row + 1, col: this.col + 1 },
      { row: this.row + 1, col: this.col - 1 },
    ];

    moves.filter();

    return moves;
  }
}
