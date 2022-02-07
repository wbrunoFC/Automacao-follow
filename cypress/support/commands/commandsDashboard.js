/// <reference types="cypress" />
require('cypress-xpath')

Cypress.Commands.add('adicionarNovoWidget', () => {
    cy.xpath('//*[@id="addWidget"]')
        .click({force: true}).as('adicionar widget')
})
