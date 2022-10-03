import * as UnicodePieces from '../../chess/util/UnicodePieces';

const BoardSquare = ({ id, board, row, col, selectedSquare, moves, attacks, handleClick }) => {
  let display = '';
  let className = 'board-sqr';

  const piece = board.pieceAt(row, col);
  let isAvailableMove = false;
  let isAvailableAttack = false;

  moves.forEach((move) => {
    if (move.row === row && move.col === col) {
      isAvailableMove = true;
    }
  });

  attacks.forEach((attack) => {
    if (attack.row === row && attack.col === col) {
      isAvailableAttack = true;
    }
  });

  if (piece) {
    display = UnicodePieces.PIECES[piece.color][piece.toString()];
    className += ' ' + piece.color;
  }

  if (selectedSquare && row === selectedSquare.row && col === selectedSquare.col) {
    className += ' selected-square';
  } else if (isAvailableAttack) {
    className += ' available-attack';
  } else if (isAvailableMove) {
    className += ' available-move';
  }

  return (
    <div onClick={() => handleClick(row, col)} className={className} id={id}>
      {display}
    </div>
  );
};

export default BoardSquare;
