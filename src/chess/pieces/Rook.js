import Piece from './Piece';
import * as Constants from '../util/Constants';

export default class Rook extends Piece {
    toString() {
        return Constants.ROOK;
    }

    movementDirections() {
        return Constants.ORTHOGONAL;
    }
}