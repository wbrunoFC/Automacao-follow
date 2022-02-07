/// <reference types="cypress" />

describe('Validação da página de login', () => {
    it('Acessar página de login', () => {
        cy.log(`Executando em ambiente ${Cypress.env('environment')}`)
        cy.visit('', {timeout:15000})
        cy.title()
            .should('be.eq', 'Login - Follow Energy')
    });

    it.only('CT01 Validar mensagem de campos obrigatórios', () => {
        cy.visit('https://noprod.followenergy.com/')

        // #1 - Clica no botão de login
        cy.get('#sign').click()
        
        // #2 - Verifica se existe mensagem no placeholder usuário
        cy.get('#txtUser')
            .invoke('attr', 'placeholder')
            .should('contain', 'Usuário')
        
        // #3 - Verifica mensagem de campo obrigatório usuário
        cy.get('#txtUser')
            .invoke('prop', 'validationMessage')
            .should('eq', 'Preencha este campo.')
        
        // #4 - Escreve texto no input e clica no botão login
        cy.get('#txtUser')
            .type('userTest')
        cy.get('#sign')
            .click()

        // #5 - Verifica se existe mensagem no placeholder senha
        cy.get('#txtPassword')
            .invoke('attr', 'placeholder')
            .should('contain', 'Senha')

        // #6 - Verifica mensagem de campo obrigatório senha
        cy.get('#txtPassword')
            .invoke('prop', 'validationMessage')
            .should('eq', 'Preencha este campo.')

        // #7 - Escreve texto no input e clica no botão login
        cy.get('#txtPassword')
            .type('passwordTest')
        cy.get('#sign')
            .click()

        // #8 - Valida mensagem de usuário inexistente
        cy.get('#login > strong')
            .contains('Usuário ou senha inválido.')

    });
})