Cypress.Commands.add('fillMandatoryFieldAndSubmit', (data = {
    firstName: 'Marcos',
    lastName: 'Teste',
    email: 'algumacoisa@gmail.com',
    text: 'Test'
}) => {
    cy.get('#firstName').type()
    cy.get('#lastName').type()
    cy.get('#email').type()
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})