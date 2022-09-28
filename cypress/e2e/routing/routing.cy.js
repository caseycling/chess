describe('Testing routing', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Routes to the login page', function () {
    cy.visit('/login');
    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('Redirects to the Seattle Chess Club IG page', function () {
    cy.get('.ig-link').click();
    cy.url().should(
      'eq',
      'https://www.instagram.com/seattlechessclub/?utm_medium=copy_link&hl=en'
    );
  });

  it('Allows multiple origins to be tested in same spec file', function () {
    cy.origin('https://www.chess.com', function () {
      cy.visit('/');
      cy.url().should('eq', 'https://www.chess.com/');
    });
  });
});
