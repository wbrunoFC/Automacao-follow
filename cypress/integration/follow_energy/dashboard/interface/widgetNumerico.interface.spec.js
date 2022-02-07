/// <reference types="cypress" />
import * as DASHBOARD from '../../../../support/pages/dashboard/widget.page'
import * as CAMPO from '../../../../fixtures/dashboard/optionsFieldWidget.json'

require('cypress-xpath')

const numerico = CAMPO[0].nomeCampos.qualEOTipo.opcoes[5]

describe('Widget interface', () => {
    beforeEach(function () {
        cy.log(`Executando em ambiente ${Cypress.env('environment')}`)
        cy.visit('', {timeout:15000})
        cy.loginFollowEnergy()
        cy.adicionarNovoWidget()
        
    })

    it(`Validar elementos existentes no assistente de widget - ${numerico}`, () => {
        DASHBOARD.WIDGET_nomeCampo_qualEOTipo()
            .should('exist')
            .and('to.be.visible')
            .and('contain', 'Qual é o tipo?')
        DASHBOARD.WIDGET_select_qualEOTipo(`${numerico}`)
            .should('to.be.visible')
            .and('to.be.enabled')
        
        cy.xpath('//*[@id="lstKindWidget"]/option')
            .should('have.length', 17)
            .as(`Quantidade de opções no campo ${numerico}`)

        DASHBOARD.WIDGET_nomeCampo_widgetGrupoOuPonto()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Widget de Grupo ou Ponto?')
        cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[2]/td[2]/div/input')
            .should('to.be.visible')
            .and('to.be.enabled')
            .and('have.length', 3)
        
        DASHBOARD.WIDGET_radio_Grupo_widgetGrupoOuPonto()
            .should('to.be.visible')
            .and('to.be.enabled')
        DASHBOARD.WIDGET_radio_PontoMedicao_widgetGrupoOuPonto()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_qualPontoMedicao()
            .should('to.be.visible')
            .and('contain.text', 'Qual o Ponto de Medição?')
        DASHBOARD.WIDGET_search_qualPontoMedicao()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_radio_Grupo_widgetGrupoOuPonto()
            .click()

        DASHBOARD.WIDGET_nomeCampo_qualGrupo()
            .should('to.be.visible')
            .and('contain.text', 'Qual o Grupo?')
        DASHBOARD.WIDGET_search_qualGrupo()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_qualTipo()
            .should('to.be.visible')
            .and('contain.text', 'Qual é o tipo?')
        DASHBOARD.WIDGET_select_qualTipo()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_exibirQualValor()
            .should('to.be.visible')
            .and('contain.text', 'Exibir qual valor ?')
        DASHBOARD.WIDGET_select_exibirQualValor()
            .should('to.be.visible')
            .and('to.be.enabled')
        cy.xpath('//*[@id="lstDash_tipos"]/option[@value]')
            .should('have.length', 1)
            .as('Quatidade de opções no select')
    });
});