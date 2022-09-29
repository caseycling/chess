describe('Testing Rook behavior and functionality', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays movement and attack squares for rooks', function () {
    cy.getSquare('A2').click();
    cy.getSquare('A4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('A1').click();
    cy.getSquare('A2').should('have.class', 'available-attack');
    cy.getSquare('A3').should('have.class', 'available-attack');
  });

  it('Allows the rook to move', function () {
    cy.getSquare('A2').click();
    cy.getSquare('A4').click();

    cy.getSquare('E7').click();
    cy.getSquare('E5').click();

    cy.getSquare('A1').click();
    cy.getSquare('A2').click();
    cy.getSquare('A2').should('contain', 'Rook');
  });
});
