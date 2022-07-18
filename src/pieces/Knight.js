import Piece from './Piece.js';

export default class Knight extends Piece {
  movementSquares() {
    let moves = [
      { row: this.row + 2, col: this.col - 1 },
      { row: this.row + 2, col: this.col + 1 },
      { row: this.row - 2, col: this.col - 1 },
      { row: this.row - 2, col: this.col + 1 },
      { col: this.col + 2, row: this.row - 1 },
      { col: this.col + 2, row: this.row + 1 },
      { col: this.col - 2, row: this.row - 1 },
      { col: this.col - 2, row: this.row + 1 },
    ];

    moves = moves.filter();
    return moves;
  }
}
