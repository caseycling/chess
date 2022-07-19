import ChessBoard from "./ChessBoard";
import { BLACK, WHITE } from './util/Constants';

export default class ChessGame {
    constructor() {
        this.board = new ChessBoard();
        this.turns = [];

        this.currentPlayer = WHITE;
    }

    makeMove(startRow, startCol, endRow, endCol) {
        let startPiece = this.board.pieceAt(startRow, startCol);
        if (!startPiece) {
            console.log('No piece at start position row:', startRow, 'col:', startCol);
            return;
        }

        if (startPiece.color !== this.currentPlayer) {
            console.log('Wrong turn. Attempting to move start color:', startPiece.color, 'on turn color:', this.currentPlayer);
        }

        // grab a reference to the endPiece so we can display it as capture and keep track of points later.
        let endPiece = this.board.pieceAt(endRow, endCol);
    }
}