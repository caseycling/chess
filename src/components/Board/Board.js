import React from 'react';
import './Board.css';

import { useState } from 'react';

const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const row = [1, 2, 3, 4, 5, 6, 7, 8];

const MoveMessage = ({clicks}) => {
  if (clicks.length === 1) {
    return <div className="move-message">{clicks[0]}</div>
  } else if (clicks.length === 2) {
    return <div className="move-message">{clicks[0]} to {clicks[1]}</div>
  }
};

const Board = () => {
  let [clickState, setClickState] = useState([]);

  let board = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < column.length; j++) {
      board.push(`${column[j]}${row[i]}`);
    }
  }

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
        {board.map((sqr) => {
          return (
            <div className='board-sqr' key={sqr} id={sqr} onClick={() => handleClick(sqr)}>
              {' '}
              {sqr}{' '}
            </div>
          );
        })}
      </div>
      <MoveMessage clicks={clickState} />
    </div>
  );
};

export default Board;
