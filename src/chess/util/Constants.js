export const BLACK = 'black';
export const WHITE = 'white';

const UP = {dx: 0, dy: -1};
const DOWN = {dx: 0, dy: +1};
const LEFT = {dx: +1, dy: 0};
const RIGHT = {dx: -1, dy: 0};

export const ORTHOGONAL = [UP, DOWN, LEFT, RIGHT];

const UP_LEFT = {dx: -1, dy: -1};
const UP_RIGHT = {dx: +1, dy: -1};
const DOWN_LEFT = {dx: -1, dy: +1};
const DOWN_RIGHT = {dx: +1, dy: +1};

export const DIAGONAL = [UP_LEFT, UP_RIGHT, DOWN_LEFT, DOWN_RIGHT];

export const PIN_LANES = {
    RANK: [LEFT, RIGHT],
    FILE: [UP, DOWN],
    DIAGONAL_FORWARD_SLASH: [DOWN_RIGHT, UP_LEFT],
    DIAGONAL_BACK_SLASH: [DOWN_LEFT, UP_RIGHT],
};

// the King and Queen move omnidirection
export const OMNIDIRECTIONAL = [ ...ORTHOGONAL, ...DIAGONAL]