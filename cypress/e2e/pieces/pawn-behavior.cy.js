describe('Testing pawn behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays movement and attack squares for pawns', function () {
    cy.getSquare('D2').click();

    cy.getSquare('C3').should('have.class', 'available-attack');
    cy.getSquare('D3').should('have.class', 'available-move');
    cy.getSquare('E3').should('have.class', 'available-attack');
    cy.getSquare('D4').should('have.class', 'available-move');
  });

  it('Allows a pawn to move two squares only on the first turn and correctly displays available moves', function () {
    cy.getSquare('D2').click();
    cy.getSquare('D4').click();
    cy.getSquare('D4').should('contain', 'Pawn');

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();
    cy.getSquare('E5').should('contain', 'Pawn');

    cy.getSquare('D4').click();
    cy.getSquare('C5').should('have.class', 'available-attack');
    cy.getSquare('D5').should('have.class', 'available-move');
    cy.getSquare('E5').should('have.class', 'available-attack');
    cy.getSquare('D6').should('not.have.class', 'available-attack');

    cy.getSquare('D6').click();
    cy.getSquare('D6').should('not.contain', 'Pawn');
  });

  it('Allows pawns to capture other pieces and removes them from the board', function () {
    cy.getSquare('D2').click();
    cy.getSquare('D4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('D4').click();
    cy.getSquare('E5').click();

    cy.verifyBlackPieces('Pawn', 7);
  });
});
