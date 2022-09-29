describe('Testing king behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays movement and attack squares for kings', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('E1').click();
    cy.getSquare('E2').should('have.class', 'available-attack');
  });

  it('Allows the king to move', function () {
    cy.getSquare('E2').click();
    cy.getSquare('E4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('E1').click();
    cy.getSquare('E2').click();

    cy.getSquare('E2').should('contain', 'King');
  });
});
