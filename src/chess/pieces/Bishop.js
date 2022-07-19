import Piece from './Piece';
import { ORTHOGONAL } from '../util/Constants';

export default class Bishop extends Piece {
    toString() {
        return 'Bishop';
    }

    movementDirections() {
        return ORTHOGONAL;
    }
}