import Piece from './Piece';

export default class King extends Piece {
    toString() {
        return 'King';
    }

    movementSquares() {
        return []
    }
}