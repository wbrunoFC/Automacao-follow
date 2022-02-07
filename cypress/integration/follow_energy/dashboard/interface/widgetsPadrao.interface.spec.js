/// <reference types="cypress" />
import * as DASHBOARD from '../../../../support/pages/dashboard/widget.page'

require('cypress-xpath')

describe('Widgets Intafece', () => {
    beforeEach(function () {
        cy.log(`Executando em ambiente ${Cypress.env('environment')}`)
        cy.visit('', {timeout:15000})
        cy.loginFollowEnergy()
        cy.adicionarNovoWidget()
        
    })

    it('Validar elementos existentes no assistente de widget - Padrão', () => {
        DASHBOARD.WIDGET_nomeCampo_qualEOTipo()
            .should('exist')
            .should('to.be.visible')
            .should('contain', 'Qual é o tipo?')
        DASHBOARD.WIDGET_select_qualEOTipo('Padrão')
            .should('to.be.visible')
            .should('to.be.enabled')
            .as('Campo - Qual é o tipo = Validado')

        DASHBOARD.WIDGET_nomeCampo_widgetGrupoOuPonto()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Widget de Grupo ou Ponto?')
        cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[2]/td[2]/div/input')
            .should('to.be.visible')
            .should('to.be.enabled')
            .should('have.length', 3)
            .as('Campo - Widget de Grupo ou Ponto? = Validado')

        DASHBOARD.WIDGET_radio_Grupo_widgetGrupoOuPonto()
            .click()
            .as('widget de grupo ou ponto? = Grupo')
        DASHBOARD.WIDGET_nomeCampo_qualGrupo()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Qual o Grupo?')
        DASHBOARD.WIDGET_search_qualGrupo()
            .should('to.be.visible')
            .should('to.be.enabled')
            .as('Campo - Qual o Grupo? = Validado')

        DASHBOARD.WIDGET_nomeCampo_qualTipo()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Qual é o tipo?')
        DASHBOARD.WIDGET_select_qualTipo()
            .should('to.be.visible')
            .should('to.be.enabled')
            .as('Campo - Qual é o tipo? = Validado')

        DASHBOARD.WIDGET_nomeCampo_qualPeriodoVisualizacaoGrafica()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Qual o período para visualização gráfica?')
        DASHBOARD.WIDGET_select_qualPeriodoVisualizacaoGrafica()
            .should('be.visible')
            .should('to.be.enabled')
            .as('Campo - Qual o período para visualização gráfica? = Validado')

        DASHBOARD.WIDGET_nomeCampo_escolhaIntervaloAtualizacao()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Escolha o intervalo para a atualização:')
        DASHBOARD.WIDGET_select_escolhaIntervaloAtualizacao()
            .should('to.be.visible')
            .should('to.be.enabled')
            .as('Campo - Escolha o intervalo para a atualização: = Validado')

        DASHBOARD.WIDGET_nomeCampo_manterWidgetPainel()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Manter este widget no painel:')
        DASHBOARD.WIDGET_select_manterWidgetPainel()
            .should('to.be.visible')
            .should('to.be.enabled')
            .as('Campo - Manter este widget no painel: = Validado')

        DASHBOARD.WIDGET_radio_PontoMedicao_widgetGrupoOuPonto()
            .click()
            .as('widget de grupo ou ponto? = Ponto de Medição')
        DASHBOARD.WIDGET_nomeCampo_qualPontoMedicao()
            .should('exist')
            .should('to.be.visible')
            .should('contain.text', 'Qual o Ponto de Medição?')
        DASHBOARD.WIDGET_search_qualPontoMedicao()
            .should('to.be.visible')
            .should('to.be.enabled')
            .as('Campo - Qual o Ponto de Medição? = Validado')

    });
});