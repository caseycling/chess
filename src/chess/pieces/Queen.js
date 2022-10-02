import Piece from './Piece';
import * as Constants from '../util/Constants';

export default class Queen extends Piece {
    toString() {
        return Constants.QUEEN
    }

    movementDirections() {
        return Constants.OMNIDIRECTIONAL;
    }
}