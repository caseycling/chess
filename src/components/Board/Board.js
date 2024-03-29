import React from 'react';
import './Board.css';

import BoardSquare from './BoardSquare';

import ChessGame from '../../chess/ChessGame';

import { useState } from 'react';

let game = new ChessGame();

const Board = () => {
  let [lastClick, setLastClick] = useState(null);
  let [moves, setMoves] = useState([]);
  let [attacks, setAttacks] = useState([]);

  function handleClick(row, col) {
    console.log('click', row, col);

    if (lastClick === null) {
      const piece = game.board.pieceAt(row, col);
      if (!piece) return;

      const moves = piece.movementSquares(game.board, row, col);
      const attacks = piece.attackSquares(game.board, row, col);

      setLastClick({ row, col });
      setMoves(moves);
      setAttacks(attacks);
    } else {
      // moves is an array objects with row and col properties of integers
      // like: [{row: 0, col: 0}, {row: 0, col: 1}]
      const isSameObject = el => el.row === row && el.col === col;
      if (!moves.find(isSameObject) && !attacks.find(isSameObject)) {
        console.log('invalid move', {row, col});
        return
      }

      console.log('make move');
      game.makeMove(lastClick.row, lastClick.col, row, col);
      setLastClick(null);
      setMoves([]);
      setAttacks([]);
    }
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
