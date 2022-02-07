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

    it('Validar elementos existentes no assistente de widget - KPI', () => {
        DASHBOARD.WIDGET_select_qualEOTipo('KPI')
            .select('KPI')
            .should('exist')
            .and('to.be.visible')

        DASHBOARD.WIDGET_nomeCampo_widgetGrupoOuPonto()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Widget de Grupo ou Ponto?')
        cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[2]/td[2]/div/input')
            .should('to.be.visible')
            .and('to.be.enabled')
            .and('have.length', 3)
            .as('Campo - Widget de Grupo ou Ponto? = Validado')

        DASHBOARD.WIDGET_radio_Grupo_widgetGrupoOuPonto()
            .should('to.enabled')
        DASHBOARD.WIDGET_radio_PontoMedicao_widgetGrupoOuPonto()
            .should('to.be.disabled')

        DASHBOARD.WIDGET_nomeCampo_qualPontoMedicao()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Qual o Ponto de Medição?')
        DASHBOARD.WIDGET_search_qualPontoMedicao()
            .should('to.be.visible')
            .and('to.be.enabled')
            .as('Campo - Qual o Ponto de Medição? = Validado')

        DASHBOARD.WIDGET_nomeCampo_qualPeriodoCalculoKPI()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Qual o período para cálculo do KPI?')
        DASHBOARD.WIDGET_select_qualPeriodoCalculoKPI()
            .should('to.be.visible')
            .and('to.be.enabled')
            .as('Campo - Qual o período para cálculo do KPI? = Validado')

        DASHBOARD.WIDGET_nomeCampo_qualParametroBaseReferencia()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Qual é o paramêtro base de referência?')
        DASHBOARD.WIDGET_select_qualParametroBaseReferencia()
            .should('to.be.visible')
            .and('to.be.enabled')
            .as('Campo - Qual é o paramêtro base de referência? = Validado')

        DASHBOARD.WIDGET_nomeCampo_utilizarMediaReferencia()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Utilizar média da referência')
        DASHBOARD.WIDGET_radio_sim_utilizarMediaReferencia()
            .click()
            .should('to.be.visible')
            .and('to.be.enabled')
        DASHBOARD.WIDGET_radio_nao_utilizarMediaReferencia()
            .click()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_classificarPeloKPI()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Classificar pelo KPI:')
        DASHBOARD.WIDGET_radio_mediaGrupo_classificarPeloKPI()
            .click()
            .should('to.be.visible')
            .and('to.be.enabled')
        DASHBOARD.WIDGET_radio_outro_classificarPeloKPI()
            .click()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_qualidadeAmostragemQA()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Qualidade de Amostragem (QA)')
        DASHBOARD.WIDGET_inputText_qualidadeAmostragemQA()
            .should('to.be.visible')
            .and('to.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_escolhaIntervaloAtualizacao()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Escolha o intervalo para a atualização:')
        DASHBOARD.WIDGET_select_escolhaIntervaloAtualizacao_KPI()
            .should('be.visible')
            .and('not.be.enabled')

        DASHBOARD.WIDGET_nomeCampo_manterWidgetPainel()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Manter este widget no painel:')
        DASHBOARD.WIDGET_select_manterWidgetPainel()
            .should('to.be.visible')
            .and('to.be.enabled')
            
        cy.xpath('//*[@id="addWidgetNew"]/div/div/div[3]/button')
            .should('exist')
            .and('to.be.visible')
            .and('have.length', 4)
            .as('Botões da tela validados')

    });
});