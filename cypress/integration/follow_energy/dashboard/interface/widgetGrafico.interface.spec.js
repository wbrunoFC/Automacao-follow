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

        DASHBOARD.WIDGET_nomeCampo_widgetGrupoOuPonto()
            .and('to.be.visible')
        cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[2]/td[2]/div/input')
            .should('to.be.visible')
            .and('to.be.enabled')
            // .and('have.length', 2)
        DASHBOARD.WIDGET_radio_Grupo_widgetGrupoOuPonto()
            .check()

        DASHBOARD.WIDGET_nomeCampo_qualPontoMedicao()
            .and('contain.text', 'Qual o Ponto de Medição?')
        DASHBOARD.WIDGET_search_qualPontoMedicao()
            .type('davo{enter}', {timeout:50000})
        cy.get('[data-id="191"] > td', {timeout:50000}).click()
            
        DASHBOARD.WIDGET_nomeCampo_QualOTipoDeGrafico()
            .should('to.be.visible')
        DASHBOARD.WIDGET_select_QualOTipoDeGrafico()
            .should('to.be.visible')
            .and('to.be.enabled')
            .and('have.length', 1)

        DASHBOARD.WIDGET_nomeCampo_QualOTipoDeGrafico()
            .should('to.be.visible')
        DASHBOARD.WIDGET_select_QualOTipoDeGrafico()
            .should('to.be.visible')
            .and('to.be.enabled')
            .and('have.length', 1)
        
        
    });
});