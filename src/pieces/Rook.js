import Piece from './Piece.js';

export default class Rook extends Piece {
  movementSquares() {
    let moves = [
      //Up: white Down: black
      { row: this.row - 1, col: this.col },
      { row: this.row - 2, col: this.col },
      { row: this.row - 3, col: this.col },
      { row: this.row - 4, col: this.col },
      { row: this.row - 5, col: this.col },
      { row: this.row - 6, col: this.col },
      { row: this.row - 7, col: this.col },

      //Down: black Up: white
      { row: this.row + 1, col: this.col },
      { row: this.row + 2, col: this.col },
      { row: this.row + 3, col: this.col },
      { row: this.row + 4, col: this.col },
      { row: this.row + 5, col: this.col },
      { row: this.row + 6, col: this.col },
      { row: this.row + 7, col: this.col },

      //Left
      { row: this.row, col: this.col - 1 },
      { row: this.row, col: this.col - 2 },
      { row: this.row, col: this.col - 3 },
      { row: this.row, col: this.col - 4 },
      { row: this.row, col: this.col - 5 },
      { row: this.row, col: this.col - 6 },
      { row: this.row, col: this.col - 7 },

      //Right
      { row: this.row, col: this.col + 1 },
      { row: this.row, col: this.col + 2 },
      { row: this.row, col: this.col + 3 },
      { row: this.row, col: this.col + 4 },
      { row: this.row, col: this.col + 5 },
      { row: this.row, col: this.col + 6 },
      { row: this.row, col: this.col + 7 },
    ];
    moves.filter();

    return moves;
  }

  attackSquares() {}
}
