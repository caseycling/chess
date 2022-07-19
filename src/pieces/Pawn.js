import Piece from './Piece.js';

export default class Pawn extends Piece {
  constructor(color, pointvalue) {
    super(color, pointvalue);
    this.hasMoved = false;
  }

  movementSquares() {
    //Black pieces will only be able to move down rows while white can only move up
    let moves =
      //Black logic
      this.color === 'black'
        ? [
            { row: this.row + 1, col: this.col },
            !this.hasMoved && { row: this.row + 2, col: this.col },
          ]
        : //White logic
          [
            { row: this.row - 1, col: this.col },
            !this.hasMoved && { row: this.row + 2, col: this.col },
          ];

    moves.filter();

    return moves;
  }

  attackSquares() {
    let moves =
      //Black logic
      this.color === 'black'
        ? [
            { row: this.row + 1, col: this.col + 1 },
            { row: this.row + 1, col: this.col - 1 },
          ]
        : //White logic
          [
            { row: this.row - 1, col: this.col + 1 },
            { row: this.row - 1, col: this.col - 1 },
          ];
    moves.filter();

    return moves;
  }
}
