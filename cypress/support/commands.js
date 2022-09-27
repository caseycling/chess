Cypress.Commands.add('verifyWhitePieces', (piece, number) => {
  return cy.get(`.white:contains(${piece})`).should('have.length', number);
});

Cypress.Commands.add('verifyBlackPieces', (piece, number) => {
  return cy.get(`.black:contains(${piece})`).should('have.length', number);
});

Cypress.Commands.add('movePiece', (startSqr, endSqr) => {
  cy.get(`div[id="${startSqr}"]`).click();
  return cy.get(`div[id="${endSqr}"]`).click();
});

Cypress.Commands.add('getSquare', (sqr) => {
  return cy.get(`div[id="${sqr}"]`);
});
