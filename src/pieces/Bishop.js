import Piece from './Piece.js';

export default class Bishop extends Piece {
  movementSquares() {
    let moves = [
      //Diagnols
      { row: this.row + 1, col: this.col + 1 },
      { row: this.row + 2, col: this.col + 2 },
      { row: this.row + 3, col: this.col + 3 },
      { row: this.row + 4, col: this.col + 4 },
      { row: this.row + 5, col: this.col + 5 },
      { row: this.row + 6, col: this.col + 6 },
      { row: this.row + 7, col: this.col + 7 },

      { row: this.row - 1, col: this.col - 1 },
      { row: this.row - 2, col: this.col - 2 },
      { row: this.row - 3, col: this.col - 3 },
      { row: this.row - 4, col: this.col - 4 },
      { row: this.row - 5, col: this.col - 5 },
      { row: this.row - 6, col: this.col - 6 },
      { row: this.row - 7, col: this.col - 7 },

      { row: this.row + 1, col: this.col - 1 },
      { row: this.row + 2, col: this.col - 2 },
      { row: this.row + 3, col: this.col - 3 },
      { row: this.row + 4, col: this.col - 4 },
      { row: this.row + 5, col: this.col - 5 },
      { row: this.row + 6, col: this.col - 6 },
      { row: this.row + 7, col: this.col - 7 },

      { row: this.row - 1, col: this.col + 1 },
      { row: this.row - 2, col: this.col + 2 },
      { row: this.row - 3, col: this.col + 3 },
      { row: this.row - 4, col: this.col + 4 },
      { row: this.row - 5, col: this.col + 5 },
      { row: this.row - 6, col: this.col + 6 },
      { row: this.row - 7, col: this.col + 7 },
    ];
    moves.filter();

    return moves;
  }

  attackSquares() {}
}
