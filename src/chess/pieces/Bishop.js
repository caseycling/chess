import Piece from './Piece';
import * as Constants from '../util/Constants';

export default class Bishop extends Piece {
  toString() {
    return Constants.BISHOP;
  }

  movementDirections() {
    return Constants.DIAGONAL;
  }
}
