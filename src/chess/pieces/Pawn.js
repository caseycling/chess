import Piece from './Piece';
import { BLACK, WHITE } from '../util/Constants';

export default class Pawn extends Piece {
  constructor(color) {
    super(color);

    // call this function once and store the result so it isn't "intensively" computed every time
    // I'm joking that this would ever be "intensive." But HA HA HA.
    this.orientation = this._orientation();
  }

  toString() {
    return 'Pawn';
  }

  _orientation() {
    // slap a "plus" one in front of positive one
    // just so it balances well with negative one.
    if (this.color === BLACK) {
      return +1;
    } else if (this.color === WHITE) {
      return -1;
    }
  }

  movementSquares(board, row, col) {
    const moves = [{ row: row + this.orientation, col }];
    if (this.moves === 0) {
      moves.push({ row: row + 2 * this.orientation, col });
    }

    return moves;
  }

  attackSquares(board, row, col) {
    // TODO: handle en passant
    return [
      { row: row + this.orientation, col: col + 1 },
      { row: row + this.orientation, col: col - 1 },
    ];
  }
}
