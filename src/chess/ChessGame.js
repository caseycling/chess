import ChessBoard from './ChessBoard';
import { BLACK, WHITE } from './util/Constants';

export default class ChessGame {
  constructor() {
    this.board = new ChessBoard();
    this.turns = [];

    this.currentPlayer = WHITE;
  }

  makeMove(startRow, startCol, endRow, endCol) {
    if (startRow === endRow && startCol === endCol) {
      console.log('trying to make move from a square to itself.');
      return;
    }

    let startPiece = this.board.pieceAt(startRow, startCol);
    if (!startPiece) {
      console.log(
        'No piece at start position row:',
        startRow,
        'col:',
        startCol
      );
      return;
    }

    if (startPiece.color !== this.currentPlayer) {
      console.log(
        'Wrong turn. Attempting to move start color:',
        startPiece.color,
        'on turn color:',
        this.currentPlayer
      );
      return;
    }

    // grab a reference to the endPiece so we can display it as capture and keep track of points later.
    let endPiece = this.board.pieceAt(endRow, endCol);

    if (endPiece && startPiece.color === endPiece.color) {
      console.log(
        'Friendly fire! You cannot capture your own piece, knucklehead'
      );
      return;
    }

    this.board.grid[endRow][endCol] = startPiece;
    this.board.grid[startRow][startCol] = null;

    let nextPlayer = this.currentPlayer === WHITE ? BLACK : WHITE;

    this.currentPlayer = nextPlayer;

    startPiece.hasMoved = true;
  }
}
