import Piece from './Piece';
import { DIAGONAL } from '../util/Constants';

export default class Bishop extends Piece {
  toString() {
    return 'Bishop';
  }

  movementDirections() {
    return DIAGONAL;
  }
}
