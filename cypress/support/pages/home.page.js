const BTN_ACESSA_LOGIN = '.login' 



Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click()
})