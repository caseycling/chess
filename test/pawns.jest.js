import ChessGame from '../src/chess/ChessGame';

describe('Pawn movement', () => {
    let game;

    beforeEach(() => {
        game = new ChessGame();
    });

    it('should set up pieces correctly initially', () => {
        game.board.grid.forEach((row, rowi) => {
            row.forEach(piece => {
                if (rowi === 1) {
                    expect(piece.toString() === 'Pawn' && piece.color === 'Black');
                }
                if (rowi === 6) {
                    expect(piece.toString() === 'Pawn' && piece.color === 'White');
                }
            });
        });
    });

    it('should prevent pawns from moving three spaces on the first move', () => {

    });
});