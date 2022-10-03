import Piece from './Piece';
import * as Constants from '../util/Constants';

export default class Knight extends Piece {
    toString() {
        return Constants.KNIGHT;
    }

    movementSquares(board, row, col) {
        return [
            {row: row + 2, col: col - 1},
            {row: row + 2, col: col + 1},
            {row: row - 2, col: col - 1},
            {row: row - 2, col: col + 1},

            {row: row + 1, col: col + 2},
            {row: row - 1, col: col + 2},
            {row: row + 1, col: col - 2},
            {row: row - 1, col: col - 2},
        ]
    }
}