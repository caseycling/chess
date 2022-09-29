import prompt from 'prompt';

import ChessGame from '../chess/ChessGame';

// using the chess engine in an imaginary React component
// <Component onClick=() => game.makeMove(0, 0, 1, 1) />

// using the chess engine in an imaginary unit test
// it('should prevent black from moving first', () => {
//     const game = new ChessGame();
//     game.makeMove(0, 0, 1, 1);
// 
//     assert(game.board.grid[0][0]) === is still a black pawn
// })

// using the chess engine in an imaginary web server
// xpress.get('/makeMove?row={row}&col={col}', (row, col) => {
//     game.makeMove(0, 0, 1, 1);
// })


prompt.message = " ";
prompt.delimiter = " > ";

let isFirstMove = true;
const game = new ChessGame();
run();

async function run() {
  while (true) {
    drawBoard();
    const move = await promptMove();
    makeMove(move);
  }
}

function drawBoard() {
  console.log('   a b c d e f g h');
  game.board.grid.forEach((row, rowIndex) => {
    let line = ' ' + (8 - rowIndex) + ' ';

    row.forEach(piece => {
      // handle empty board spaces
      if (!piece) {
        line += '. '
        return;
      }

      let letter = piece.toString()[0];
  
      if (piece.toString() === 'Knight') {
        letter = 'N';
      }

      if (piece.color === 'white') {
        letter = letter.toLowerCase();
      }

      line += letter + ' ';
    });

    console.log(line);
  })
}

async function promptMove() {
  prompt.start();

  let firstDescription = 'your move (like, "e2 e4")';
  let description = 'your move';

  if (isFirstMove) {
    description = firstDescription;
    isFirstMove = false;
  }

  const { move } = await prompt.get([{ name: 'move', description }]);
  const [start, end] = move.split(' ');
  console.log('moving from', start, 'to', end);  
  console.log();

  return move;
}

function makeMove(move) {
  const [start, end] = move.split(' ');
  const startSquare = game.board.positionToRowCol(start);
  const endSquare = game.board.positionToRowCol(end);
  game.makeMove(startSquare.row, startSquare.col, endSquare.row, endSquare.col);
}

