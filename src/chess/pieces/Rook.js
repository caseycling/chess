import Piece from './Piece';
import { ORTHOGONAL } from '../util/Constants';

export default class Rook extends Piece {
    toString() {
        return 'Rook';
    }

    movementDirections() {
        return ORTHOGONAL;
    }
}