import Piece from './Piece';
import { OMNIDIRECTIONAL } from '../util/Constants';

export default class King extends Piece {
    toString() {
        return 'King';
    }

    movementDirections() {
        return OMNIDIRECTIONAL;
    }
}