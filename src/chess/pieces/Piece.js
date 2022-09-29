import { movesFromPosition } from '../util/Moves';

import { BLACK, WHITE } from '../util/Constants';
const COLORS = [BLACK, WHITE];

export default class Piece {
  constructor(color = 0) {
    this.color = COLORS[color];
    this.hasMoved = false;
  }

  toString() {
    return '?';
  }

  movementDirections() {
    return [];
  }

  movementLimit() {
    return 8;
  }

  movementSquares(board, row, col) {
    return movesFromPosition(board, row, col);
  }

  // Usually a pieces attack squares are the same as its movement squares.
  // We can rewrite this to deal with pawns and with castling and with
  // king movement (because kings may attack squares they can't move to)
  attackSquares(board, row, col) {
    return this.movementSquares(board, row, col);
  }
}
