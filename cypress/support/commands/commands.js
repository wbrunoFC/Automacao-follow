// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('pesquisarPontos', (ponto) => {
    cy.get('.open').click({timeout: 10000})
    cy.get('.search').type(ponto)
})

Cypress.Commands.add('loginFollowEnergy', () => {
    cy.get('#txtUser').type('bruno.costa')
    cy.get('#txtPassword').type(15548813)
    cy.get('#sign').click()
    cy.get('.user-name', {timeout: 5000}).should('contain', 'Bruno Costa')
})

Cypress.Commands.add('acessarPontos', () => {
    cy.get('#pontosMenu').click()
})
