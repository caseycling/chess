const BoardSquare = ({ id, board, row, col, moves, attacks, handleClick }) => {
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
    display = piece.toString();
    className += ' ' + piece.color;
  }

  if (isAvailableAttack) {
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
