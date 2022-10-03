import Piece from './Piece';
import * as Constants from '../util/Constants';

export default class Pawn extends Piece {
  constructor(color) {
    super(color);

    // call this function once and store the result so it isn't "intensively" computed every time
    // I'm joking that this would ever be "intensive." But HA HA HA.
    this.orientation = this._orientation();
  }

  toString() {
    return Constants.PAWN;
  }

  _orientation() {
    // slap a "plus" one in front of positive one
    // just so it balances well with negative one.
    if (this.color === Constants.BLACK) {
      return +1;
    } else if (this.color === Constants.WHITE) {
      return -1;
    }
  }

  movementSquares(board, row, col) {
    const move1 = { row: row + 1 * this.orientation, col };
    const move2 = { row: row + 2 * this.orientation, col };

    const piece1 = board.grid[move1.row][move1.col];
    const piece2 = board.grid[move2.row][move2.col];

    const moves = [];
    if (!piece1) {
      moves.push(move1);
    }
    if (this.moves === 0 && !piece2) {
      moves.push(move2);
    }
    return moves;
  }

  attackSquares(board, row, col) {
    const attack1 = { row: row + this.orientation, col: col + 1 };
    const attack2 = { row: row + this.orientation, col: col - 1 };

    const piece1 = board.grid[attack1.row][attack1.col];
    const piece2 = board.grid[attack2.row][attack2.col];

    const attacks = [];
    if (piece1 && piece1.color !== this.color) {
      attacks.push(attack1);
    }

    if (piece2 && piece2.color !== this.color) {
      attacks.push(attack2);
    }
    return attacks;
  }
}
