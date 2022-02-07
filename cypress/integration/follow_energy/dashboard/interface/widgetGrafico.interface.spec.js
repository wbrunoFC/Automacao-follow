/// <reference types="cypress" />
import * as DASHBOARD from '../../../../support/pages/dashboard/widget.page'
import * as CAMPO from '../../../../fixtures/dashboard/optionsFieldWidget.json'

require('cypress-xpath')

const grafico = CAMPO[0].nomeCampos.qualEOTipo.opcoes[6]

describe('Widget interface', () => {
    beforeEach(function () {
        cy.log(`Executando em ambiente ${Cypress.env('environment')}`)
        cy.visit('', {timeout:15000})
        cy.loginFollowEnergy()
        cy.adicionarNovoWidget()
        
    })

    it(`Validar elementos existentes no assistente de widget - ${grafico}`, () => {
        DASHBOARD.WIDGET_nomeCampo_qualEOTipo()
            .should('exist')
            .and('to.be.visible')
            .and('contain', 'Qual é o tipo?')
        DASHBOARD.WIDGET_select_qualEOTipo(`${grafico}`)
            .should('to.be.visible')
            .and('to.be.enabled')

        cy.xpath('//*[@id="lstKindWidget"]/option')
            .should('have.length', 17)
            .as(`Quantidade de opções no campo ${grafico}`)
        
    });
});