import {Pawn, Bishop, Knight, Rook, Queen, King} from './pieces';

export default class ChessBoard {
    constructor() {
        this.grid = [
            [new Rook(), new Knight(), new Bishop(), new Queen(), new King(), new Bishop(), new Knight(), new Rook()],
            [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn()],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1), new Pawn(1)],
            [new Rook(1), new Knight(1), new Bishop(1), new Queen(1), new King(1), new Bishop(1), new Knight(1), new Rook(1)]
        ];
    }

    rowColToPosition(row, col) {
        let rank = '87654321'[row];
        let file = 'abcdefgh'[col];
        return file + rank;
    }

    isValidSquare(row, col) {
        // People may tell you to "optimize" this and simply return the boolean expression itself.
        // But if you do that you lose some ability to step through this in a debugger and see what's
        // going on when shit goes wrong.
        if (row < 0 || col < 0 || row >= this.grid.length || col >= this.grid[row].length) {
            return false;
        }
        return true;
    }

    pieceAt(row, col) {
        if (!this.isValidSquare(row, col)) {
            console.log('Attempting to get piece at invalid square row:', row, 'col:', col);
            return null;
        }
        return this.grid[row][col];
    }
}

