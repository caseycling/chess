export const BLACK = 'black';
export const WHITE = 'white';

export const KING = 'King';
export const QUEEN = 'Queen';
export const ROOK = 'Rook';
export const BISHOP = 'Bishop';
export const KNIGHT = 'Knight';
export const PAWN = 'Pawn';

/*
  a b c d e f g h black
8        North +y
7
6
5 West -x        East +x
4
3
2
1        South -y
  a b c d e f g h white
*/

const NORTH = {id: 'north', dx: 0, dy: -1};
const SOUTH = {id: 'south', dx: 0, dy: +1};
const EAST = {id: 'east', dx: -1, dy: 0};
const WEST = {id: 'west', dx: +1, dy: 0};

export const ORTHOGONAL = [NORTH, SOUTH, EAST, WEST];

const NORTH_WEST = {id: 'north_west', dx: -1, dy: +1};
const NORTH_EAST = {id: 'north_east', dx: +1, dy: +1};
const SOUTH_EAST = {id: 'south_east', dx: +1, dy: -1};
const SOUTH_WEST = {id: 'south_west', dx: -1, dy: -1};

export const DIAGONAL = [NORTH_WEST, NORTH_EAST, SOUTH_EAST, SOUTH_WEST];

export function equalsDirection(direction1, direction2) {
    return direction1.id === direction2.id;
}

export const REVERSE_DIRECTION = {
    [NORTH.id]: SOUTH,
    [SOUTH.id]: NORTH,
    [EAST.id]: WEST,
    [WEST.id]: EAST,
    [NORTH_WEST.id]: SOUTH_EAST,
    [NORTH_EAST.id]: SOUTH_WEST,
    [SOUTH_EAST.id]: NORTH_WEST,
    [SOUTH_WEST.id]: NORTH_EAST,
}

// the King and Queen move omnidirection
export const OMNIDIRECTIONAL = [ ...ORTHOGONAL, ...DIAGONAL]
