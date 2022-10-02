import Piece from './Piece';
import * as Constants from '../util/Constants';

export default class King extends Piece {
    toString() {
        return Constants.KING;
    }

    movementDirections() {
        return Constants.OMNIDIRECTIONAL;
    }

    movementLimit() {
        return 1;
    }
}