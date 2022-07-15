import Piece from './Piece.js';

export default class King extends Piece {
  movementSquares() {
    let moves = [
      { row: this.row - 1, col: this.col },
      { row: this.row + 1, col: this.col },
      { row: this.row, col: this.col - 1 },
      { row: this.row, col: this.col + 1 },
    ];
    moves.filter();

    return moves;
  }

  attackSquares() {}
}
