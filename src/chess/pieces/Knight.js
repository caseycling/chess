import Piece from './Piece';

export default class Knight extends Piece {
    toString() {
        return 'Knight';
    }

    movementSquares(row, col) {
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