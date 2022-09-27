describe('My First Test', function () {
  before(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Populates 16 pieces for white and black', function () {
    cy.get('.black').should('have.length', 16);
    cy.get('.white').should('have.length', 16);
  });

  // it('Populates 8 pawns for white and black', function () {
  //   cy.get('.black').contains('Pawn').should('have.length', 8);
  // });
  // it( , function () {

  // });
  // it( , function () {

  // });
});
