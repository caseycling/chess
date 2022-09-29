describe('Testing knight behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays movement squares for knights', function () {
    cy.getSquare('B1').click();

    cy.getSquare('A3').should('have.class', 'available-attack');
    cy.getSquare('C3').should('have.class', 'available-attack');
  });

  it('Only allows knights to move to valid squares', function () {
    cy.getSquare('B1').click();
    cy.getSquare('B7').click();

    cy.getSquare('B1').should('contain', 'Knight');
    cy.getSquare('B7').should('not.contain', 'Knight');

    cy.getSquare('B1').click();
    cy.getSquare('C3').click();

    cy.getSquare('B1').should('not.contain', 'Knight');
    cy.getSquare('C3').should('contain', 'Knight');
  });
});
