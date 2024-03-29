import Piece from './Piece';
import { OMNIDIRECTIONAL } from '../util/Constants';

export default class Queen extends Piece {
    toString() {
        return 'Queen';
    }

    movementDirections() {
        return OMNIDIRECTIONAL;
    }
}