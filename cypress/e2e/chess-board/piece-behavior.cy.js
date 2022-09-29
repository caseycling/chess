describe('Testing piece behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Only allows white to move first', function () {
    cy.movePiece('D7', 'D5');
    cy.getSquare('D5').should('not.have.text', 'Pawn');
    cy.getSquare('D5').should('not.have.class', 'black');

    cy.movePiece('D2', 'D4');
    cy.getSquare('D4').should('have.text', 'Pawn');
    cy.getSquare('D4').should('have.class', 'white');
  });

  it('Does not let the same color move twice in a row', function () {
    cy.movePiece('D2', 'D4');
    cy.movePiece('D4', 'D5');

    cy.getSquare('D5').should('not.have.text', 'Pawn');
    cy.getSquare('D5').should('not.have.class', 'white');
  });

  it('Allows pieces to be captured and removed from the board', function () {
    cy.movePiece('D2', 'D4');
    cy.movePiece('E7', 'E5');
    cy.movePiece('D4', 'E5');

    cy.getSquare('E5').should('have.class', 'white');
    cy.getSquare('E5').should('not.have.class', 'black');

    cy.get('.white:contains(Pawn)').should('have.length', 8);
    cy.get('.black:contains(Pawn)').should('have.length', 7);
  });
});
