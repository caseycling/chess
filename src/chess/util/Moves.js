// Accepts the state of the board and the position of a piece on the board.
// Returns available valid movements for that piece.
export function movesFromPosition(board, row, col) {
    const piece = board.pieceAt(row, col);
    if (!piece) {
        console.log('no pieces at position row:', row, 'col:', col);
        return [];
    }

    const moves = [];
    piece.movementDirections().forEach(direction => {
        gatherMovementSquaresInDirection(board, moves, direction, row, col)
    });

    return moves;
}

function gatherMovementSquaresInDirection(board, moves, direction, startRow, startCol) {
    const startColor = board.pieceAt(startRow, startCol).color;
    let row = startRow;
    let col = startCol;

    // kind of weird to use a for loop here but a while loop is just as weird.
    // I prefer to use a for loop because at least we know we won't ever search
    // more than 8 spaces (seven spaces really) so this program will never get caught
    // in an infinite loop here. (thought if we have proper logic it shouldn't either)
    for (let i = 0; i < 8; i++) {
        row += direction.dy;
        col += direction.dx;

        // moving off the board is never a valid move (nor honorable)
        if (!board.isValidSquare(row, col)) {
            return;
        }

        // one can not attack one's own pieces (nor is it honorable)
        let otherPiece = board.pieceAt(row, col);
        if (false && otherPiece.color === startColor) {
            return;
        }

        moves.push({row, col});

        // if there is another piece at this space then the space has been added
        // as a valid move but no moves are available in this direction after this.
        if (otherPiece && otherPiece.color !== startColor) {
            return;
        }
    }
}