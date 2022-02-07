/// <reference types="cypress" />
require('cypress-xpath')

describe('Widgets', () => {
    beforeEach(function () {
        cy.visit('https://noprod.followenergy.com')
        cy.loginFollowEnergy()
        cy.xpath('//*[@id="addWidget"]').click({force: true}).as('adicionar widget').as ('adicionar widget')
    })
    it('CT01-Criar widget KPI', () => {
        // cy.xpath('//*[@id="addWidget"]').click({force: true}).as('adicionar widget')
        // // Verificar a quantidade de opções de widgets
        // cy.get('#lstKindWidget').select('KPI')
        // // Verificar quantos campos habilitados e desabilitados para input radio
        // cy.get('#txtSearch').type('Davó{enter}')
        // cy.xpath('//*[@id="tb"]/tbody/tr[1]/td').click()
        // cy.get('#txtSearchMeterKPI').type('loja{enter}')
        // cy.xpath('//*[@id="tbMeterKPI"]/tbody/tr[1]/td').click()
    
    });

    it('CT02 Criar widget Padrão', () => {
        // cy.get('#boMeter').click()
        // cy.get('#txtSearch').type('Davó{enter}')
        // cy.get('[data-cssclass="fas fa-bolt"] > td').click()
        // cy.get('#header > .text').click()
        // cy.wait(3000)
        // cy.get('#lstGrandezas').select('Consumo').should('have.value', 'Consumo')

    });

    it('CT03 Criar widget Alarmes', () => {
        // cy.get('#lstKindWidget')
        //     .select('Alarmes')
        //     .as('Qual o tipo = Alarmes')

        // cy.get('#boGroup')
        //     .click()
        //     .as('widget de grupo ou ponto? = Grupo')
        
        // cy.get('#txtSearch')
        //     .type('Davó{enter}', {timeout: 5000})
        //     .as('Pesquisar Grupo = Davó')
        
        // cy.get('[data-id="191"] > td')
        //     .click()
        //     .as('Selecionar Grupo = Davó')

        // cy.get('#lstTimeout')
        //     .select(0)
        //     .as('Intervalo para atualizacao = 4 min')

        // cy.get('#btnSave')
        //     .click()
        //     .as('Salvar widget')
    
    });
});