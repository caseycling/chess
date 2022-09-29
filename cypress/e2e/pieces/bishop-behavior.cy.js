describe('Testing pawn behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays movement squares for bishops', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('F1').click();
    cy.getSquare('E2').should('have.class', 'available-attack');
    cy.getSquare('D3').should('have.class', 'available-attack');
    cy.getSquare('C4').should('have.class', 'available-attack');
    cy.getSquare('B5').should('have.class', 'available-attack');
    cy.getSquare('A6').should('have.class', 'available-attack');
  });

  it('Only allows bishops to move to valid squares', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('F1').click();
    cy.getSquare('H8').click();

    cy.getSquare('F1').should('contain', 'Bishop');
    cy.getSquare('H8').should('not.contain', 'Bishop');

    cy.getSquare('F1').click();
    cy.getSquare('D3').click();

    cy.getSquare('F1').should('not.contain', 'Bishop');
    cy.getSquare('D3').should('contain', 'Bishop');
  });

  it('Allows bishops to attack pieces', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('F1').click();
    cy.getSquare('C4').click();

    cy.getSquare('D7').click();
    cy.getSquare('D5').click();

    cy.getSquare('C4').click();
    cy.getSquare('D5').click();

    cy.getSquare('D5').should('contain', 'Bishop');
    cy.verifyBlackPieces('Pawn', 7);
  });
});
