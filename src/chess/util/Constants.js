export const BLACK = 'black';
export const WHITE = 'white';

export const ORTHOGONAL = [
    {dx: 0, dy: -1}, // up
    {dx: 0, dy: +1}, // down
    {dx: +1, dy: 0}, // left
    {dx: -1, dy: 0}, // right
]

export const DIAGONAL = [
    {dx: -1, dy: -1}, // up left
    {dx: +1, dy: +1}, // up right
    {dx: -1, dy: +1}, // down left
    {dx: +1, dy: -1}, // down right
]

// the King and Queen move omnidirection
export const OMNIDIRECTIONAL = [ ...ORTHOGONAL, ...DIAGONAL]