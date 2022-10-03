import React from 'react';
import './Board.css';

import BoardSquare from './BoardSquare';

import ChessGame from '../../chess/ChessGame';

import { useState } from 'react';

let game = new ChessGame();

const Board = () => {
  let [lastClick, setLastClick] = useState(null);
  let [selectedSquare, setSelectedSquare] = useState(null);
  let [moves, setMoves] = useState([]);
  let [attacks, setAttacks] = useState([]);

  function handleClick(row, col) {
    console.log('click', row, col);

    const thisPiece = game.board.pieceAt(row, col);
    const lastPiece = lastClick && game.board.pieceAt(lastClick.row, lastClick.col);

    if (!lastClick && thisPiece && thisPiece.color !== game.currentPlayer) {
      console.log('Player is trying to move opponent\'s piece');
      return false;
    }

    if (lastClick === null) {
      selectPiece(row, col);
      return;
    }

    if (row === lastClick.row && col === lastClick.col) {
      deselectPiece();
      return;
    }

    // move a piece to an empty square
    if (!thisPiece && lastPiece) {
      // moves is an array objects with row and col properties of integers
      // like: [{row: 0, col: 0}, {row: 0, col: 1}]
      const isSameObject = el => el.row === row && el.col === col;
      if (!moves.find(isSameObject) && !attacks.find(isSameObject)) {
        console.log('invalid move', {row, col});
        deselectPiece();
        return
      }

      console.log('make move');
      game.makeMove(lastClick.row, lastClick.col, row, col);
      deselectPiece()
    }

    // the player clicked on one piece, then they clicked on another of their own pieces.
    if (thisPiece && thisPiece.color === lastPiece.color) {
      console.log('Player is choosing to move a different piece.');
      selectPiece(row, col);
      return true;
    }

    // the player has chosen their piece and they're capturing an opponent piece
    if (thisPiece && lastPiece && thisPiece.color !== lastPiece.color) {
      console.log('player is capturing a piece');
      game.makeMove(lastClick.row, lastClick.col, row, col);
      deselectPiece();
    }
  }

  function selectPiece(row, col) {
    const piece = game.board.pieceAt(row, col);
    if (!piece) return;

    const {openSquares, captures} = game.availableMovesForPieceAtPosition(row, col);

    const lastClick = {row, col};
    setLastClick(lastClick);
    setSelectedSquare(lastClick);
    setMoves(openSquares);
    setAttacks(captures);
  }

  function deselectPiece() {
    setLastClick(null);
    setSelectedSquare(null);
    setMoves([]);
    setAttacks([]);
  }

  const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div>
      <a
        href='https://www.instagram.com/seattlechessclub/?utm_medium=copy_link&hl=en'
        className='ig-link'
      >
        Join us at the Seattle Chess Club
      </a>
      <div className='board-cont'>
        {game.board.grid.map((row, rowIndex) => {
          return row.map((piece, colIndex) => {
            return (
              <BoardSquare
                key={rowIndex + ',' + colIndex}
                id={`${files[colIndex]}${ranks[rowIndex]}`}
                board={game.board}
                row={rowIndex}
                col={colIndex}
                selectedSquare={selectedSquare}
                moves={moves}
                attacks={attacks}
                handleClick={() => handleClick(rowIndex, colIndex)}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Board;
