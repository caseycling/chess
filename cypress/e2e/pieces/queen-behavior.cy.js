describe('Testing queen behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays movement and attack squares for queens', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('D1').click();
    cy.getSquare('E2').should('have.class', 'available-attack');
    cy.getSquare('F3').should('have.class', 'available-attack');
    cy.getSquare('G4').should('have.class', 'available-attack');
    cy.getSquare('H5').should('have.class', 'available-attack');
  });

  it('Allows the queen to move', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('D1').click();
    cy.getSquare('E2').click();

    cy.getSquare('E2').should('contain', 'Queen');
  });
});
