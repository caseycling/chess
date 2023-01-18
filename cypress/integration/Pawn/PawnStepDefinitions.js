import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the board', () => {
    cy.visit('');
})

When('I select the E2 pawn', () => {
    cy.getSquare('E2')
})

And('I then click on the E4 square', () => {
    cy.getSquare('E4')

})

Then('the pawn will move to the E4 square', () => {
    cy.getSquare('E4').should('contain', 'Pawn')
})
