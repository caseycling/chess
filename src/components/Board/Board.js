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
      console.log(attacks);
    } else {
      console.log('make move');
      game.makeMove(lastClick.row, lastClick.col, row, col);
      setLastClick(null);
      setMoves([]);
      setAttacks([]);
    }
  }

  return (
    <div>
      <div className='board-cont'>
        {game.board.grid.map((row, rowIndex) => {
          return row.map((piece, colIndex) => {
            return (
              <BoardSquare
                key={rowIndex + ',' + colIndex}
                board={game.board}
                row={rowIndex}
                col={colIndex}
                moves={moves}
                attacks={attacks}
                handleClick={handleClick}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Board;
