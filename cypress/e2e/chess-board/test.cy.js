it('Gets an element from cy.contains', () => {
    cy.visit('https://www.google.com')
    cy.contains('.SDkEP').get()
})
