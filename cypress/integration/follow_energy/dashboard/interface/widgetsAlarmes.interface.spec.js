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

    it('Validar elementos existentes no assistente de widget - Alarmes', () => {
        // cy.WIDGET_nomeCampo_qualEOTipo()
        DASHBOARD.WIDGET_nomeCampo_qualEOTipo()
            .should('exist')
            .and('to.be.visible')
            .and('contain', 'Qual é o tipo?')
        DASHBOARD.WIDGET_select_qualEOTipo('Alarmes')
            .and('to.be.visible')
            .and('to.be.enabled')
            .as('Campo - Qual é o tipo = Validado')

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
            .click()
            .should('to.be.visible')
            .and('to.be.enabled')
            .as('widget de grupo ou ponto? = Grupo')
        DASHBOARD.WIDGET_radio_PontoMedicao_widgetGrupoOuPonto()
            .should('to.be.visible')
            .and('not.be.enabled')
        
        DASHBOARD.WIDGET_nomeCampo_qualGrupo()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Qual o Grupo?')
        DASHBOARD.WIDGET_search_qualGrupo()
            .should('to.be.visible')
            .and('to.be.enabled')
            .as('Campo - Qual o Grupo? = Validado')

        DASHBOARD.WIDGET_nomeCampo_indicador()
            .should('exist')
            .and('to.be.visible')
            .and('contain.text', 'Indicador')
        cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[18]/td[2]/input').as('Inputs radios existentes')
            .should('to.be.visible')
            .and('to.be.enabled')
        DASHBOARD.WIDGET_radio_padrao_indicador()
            .should('to.be.checked')
        DASHBOARD.WIDGET_radio_personalizado_indicador()
            .click()
            .should('to.be.checked')
        cy.xpath('//*[@id="alarmsQuantities"]/li').as('Opções checkbox')
            .should('to.be.visible')
            .and('not.be.disabled')
            .and('have.length', 22)
        
        DASHBOARD.WIDGET_nomeCampo_escolhaIntervaloAtualizacao()
            .should('contain.text', 'Escolha o intervalo para a atualização:')
        DASHBOARD.WIDGET_select_escolhaIntervaloAtualizacao()
            .should('to.be.enabled')
        cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[20]/td[2]/div/select[1]/option')
            .should('have.length', 4)
        
        DASHBOARD.WIDGET_nomeCampo_manterWidgetPainel()
            .should('contain.text', 'Manter este widget no painel:')
        DASHBOARD.WIDGET_select_manterWidgetPainel()
            .should('be.enabled')
        
        DASHBOARD.WIDGET_botoes()
            .should('to.be.enabled')
            .and('have.length', 4)
            .as('Quantidade de botoes = 4')

    });
});