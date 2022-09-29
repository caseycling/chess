describe('Testing initial board state of chess app', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Creates a chess board with 64 squares', function () {
    cy.get(`.board-sqr`).should('have.length', 64);
  });

  it('Populates 8 pawns for white and black', function () {
    cy.verifyWhitePieces('Pawn', 8);
    cy.verifyBlackPieces('Pawn', 8);
  });

  it('Populates 2 rooks for white and black', function () {
    cy.verifyWhitePieces('Rook', 2);
    cy.verifyBlackPieces('Rook', 2);
  });

  it('Populates 2 knights for white and black', function () {
    cy.verifyWhitePieces('Knight', 2);
    cy.verifyBlackPieces('Knight', 2);
  });

  it('Populates 2 bishops for white and black', function () {
    cy.verifyWhitePieces('Bishop', 2);
    cy.verifyBlackPieces('Bishop', 2);
  });

  it('Populates 1 king for white and black', function () {
    cy.verifyWhitePieces('King', 1);
    cy.verifyBlackPieces('King', 1);
  });

  it('Populates 1 queen for white and black', function () {
    cy.verifyWhitePieces('Queen', 1);
    cy.verifyBlackPieces('Queen', 1);
  });

  // it('changes link color on hover', function () {
  //   cy.get('.ig-link').should('have.css', 'color', 'rgb(255, 255, 255)');

  //   cy.get('.ig-link')
  //     .trigger('mouseover')
  //     .should('have.css', 'color', 'rgb(173, 6, 173)');
  // });
});
