import React from 'react';
import './Board.css';

const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const row = [1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => {
  let board = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < column.length; j++) {
      board.push(`${column[j]}${row[i]}`);
    }
  }

  return (
    <div className='board-cont'>
      {board.map((sqr) => {
        return (
          <div className='board-sqr' id={sqr}>
            {' '}
            {sqr}{' '}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
