Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When ('Realizo login no portal', () => {
    cy.acessarLogin()
    cy.realizarLogin()
})