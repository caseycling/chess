import React from 'react';
import './Board.css';

import { useState } from 'react';

let board = [
  ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
  ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
  ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
];

const MoveMessage = ({ clicks }) => {
  if (clicks.length === 1) {
    return <div className='move-message'>{clicks[0]}</div>;
  } else if (clicks.length === 2) {
    return (
      <div className='move-message'>
        {clicks[0]} to {clicks[1]}
      </div>
    );
  }
};

const Board = () => {
  let [clickState, setClickState] = useState([]);
  let [boardState, setBoardState] = useState({});

  function handleClick(rowCol) {
    // handle pairs of clicks like moving e2 to e4 is stored as [e2, e4]
    // once two clicks are registered clicking another time resets the array for the next pair of clicks
    if (clickState.length < 2) {
      setClickState([...clickState, rowCol]);
    } else {
      setClickState([rowCol]);
    }
  }

  return (
    <div>
      <div className='board-cont'>
        {board.map((row) => {
          return row.map((col) => {
            return <div className='board-sqr'>{col}</div>;
          });
        })}
      </div>
      <MoveMessage clicks={clickState} />
    </div>
  );
};

export default Board;
