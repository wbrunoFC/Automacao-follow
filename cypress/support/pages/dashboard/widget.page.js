/// <reference types="cypress" />
require('cypress-xpath')

/* NOME DOS CAMPOS *****************************************************/
function WIDGET_nomeCampo_qualEOTipo() {
    return cy.xpath('//*[@id="groupEdit1"]/table/tbody/tr[1]/td[1]/div')
                .as('Nome: Qual é o tipo')
}

function WIDGET_nomeCampo_qualPeriodoVisualizacaoGrafica() {
    return cy.get('.perd-md > :nth-child(1) > .dashChartText')
                .as('Nome: Qual o periodo de visualização da gráfica')
}

function WIDGET_nomeCampo_widgetGrupoOuPonto() {
    return cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .row')
                .as('Nome: widget de grupo ou ponto')
}

function WIDGET_nomeCampo_qualPontoMedicao() {
    return cy.get('.meter')
                .as('Nome: Qual é o ponto de medicao')
}

function WIDGET_nomeCampo_qualGrupo() {
    return cy.get('.group')
                .as('Nome: Qual o grupo')
}

function WIDGET_nomeCampo_qualTipo() {
    return cy.get('#kindlabel')
                .as('Nome: Qual o tipo')
}

function WIDGET_nomeCampo_escolhaIntervaloAtualizacao() {
    return cy.get('.timerRefresh > :nth-child(1) > #icone')
                .as('Nome: escolha um intervalo de atualização')
}

function WIDGET_nomeCampo_manterWidgetPainel() {
    return cy.get('#targetPanel > :nth-child(1) > .row')
                .as('Nome: Manter widget no painel')
}

function WIDGET_nomeCampo_qualPeriodoCalculoKPI() {
    return cy.get('.dashKPIText')
                .as('Nome: Qual o periodo de calculo do KPI')
}

function WIDGET_nomeCampo_qualParametroBaseReferencia() {
    return cy.get('#parameters')
                .as('Nome Qual o parametro base de referencia')
}

function WIDGET_nomeCampo_utilizarMediaReferencia() {
    return cy.get('.isParamAVGKPI-md > :nth-child(1) > .row')
                .as('Nome: Utilizar media de referencia')
}

function WIDGET_nomeCampo_classificarPeloKPI() {
    return cy.get('.referenceKPI-md > :nth-child(1) > .row')
                .as('Nome: Classificar pelo KPI')
}

function WIDGET_nomeCampo_qualidadeAmostragemQA() {
    return cy.get('.qualityAssuranceKPI-md > :nth-child(1)')
                .as('Nome: Qualidade de Amostragem QA')
}

function WIDGET_nomeCampo_indicador() {
    return cy.get(':nth-child(18) > [style="line-height: 1; width: 291px;"]')
                .as('Nome: Indicador')
}

function WIDGET_nomeCampo_exibirQualValor() {
    return cy.get('.kind-widg-md > :nth-child(1) > .dashNumericText')
                .as('Nome: Exibir qual o valor?')
}

/* CAMPOS WIDGET *****************************************************/
function WIDGET_select_qualEOTipo(tipoWidget) {
    return cy.get('#lstKindWidget').select(tipoWidget)
}

function WIDGET_search_qualPontoMedicao() {
    return cy.get('#txtSearch')
}

function WIDGET_radio_Grupo_widgetGrupoOuPonto() {
    return cy.get('#boGroup')
}

function WIDGET_radio_PontoMedicao_widgetGrupoOuPonto() {
    return cy.get('#boMeter')
}

function WIDGET_search_qualGrupo() {
    return cy.get('#txtSearch')
}

function WIDGET_select_qualTipo() {
    return cy.get('#lstKind')
}

function WIDGET_select_qualPeriodoVisualizacaoGrafica() {
    return cy.get('#lstPeriodos')
}

function WIDGET_select_escolhaIntervaloAtualizacao_KPI() {
    return cy.get('#lstTimeoutKPI')
}

function WIDGET_select_escolhaIntervaloAtualizacao() {
    return cy.get('#lstTimeout')
}

function WIDGET_select_manterWidgetPainel() {
    return cy.get('#lstPanel') 
}

function WIDGET_select_qualPeriodoCalculoKPI() {
    return cy.get('#lstPeriodos')
}

function WIDGET_select_qualParametroBaseReferencia() {
    return cy.get('#lstParameters')
}

function WIDGET_radio_sim_utilizarMediaReferencia() {
    return cy.get('#isParamAVG')
}

function WIDGET_radio_nao_utilizarMediaReferencia() {
    return cy.get('.isParamAVGKPI-md > :nth-child(2) > .widget-form-field > [value="0"]')
}

function WIDGET_radio_mediaGrupo_classificarPeloKPI() {
    return cy.get('#reportTargetTypeCustom')
}

function WIDGET_radio_outro_classificarPeloKPI() {
    return cy.get('#reportTargetTypeCustom')
}

function WIDGET_inputText_qualidadeAmostragemQA() {
    return cy.get('#qualityAssuranceQA')
}

function WIDGET_radio_padrao_indicador() {
    return cy.get('#boDefault')
}

function WIDGET_radio_personalizado_indicador() {
    return cy.get('#boCustom1')
}

function WIDGET_botoes() {
    return cy.xpath('//*[@id="addWidgetNew"]/div/div/div[3]/button')
                .as('Botoes Salvar e Cancelar')
}

function WIDGET_select_exibirQualValor() {
    return cy.get('#lstDash_tipos')
                .as('Campo: Exibir qual o valor?')
}

export { WIDGET_nomeCampo_qualEOTipo,
        WIDGET_nomeCampo_qualPeriodoVisualizacaoGrafica,
        WIDGET_nomeCampo_widgetGrupoOuPonto,
        WIDGET_nomeCampo_qualPontoMedicao,
        WIDGET_nomeCampo_qualGrupo,
        WIDGET_nomeCampo_qualTipo,
        WIDGET_nomeCampo_escolhaIntervaloAtualizacao,
        WIDGET_nomeCampo_manterWidgetPainel,
        WIDGET_nomeCampo_qualPeriodoCalculoKPI,
        WIDGET_nomeCampo_qualParametroBaseReferencia,
        WIDGET_nomeCampo_utilizarMediaReferencia,
        WIDGET_nomeCampo_classificarPeloKPI,
        WIDGET_nomeCampo_qualidadeAmostragemQA,
        WIDGET_nomeCampo_indicador,
        WIDGET_select_qualEOTipo,
        WIDGET_search_qualPontoMedicao,
        WIDGET_radio_Grupo_widgetGrupoOuPonto,
        WIDGET_radio_PontoMedicao_widgetGrupoOuPonto,
        WIDGET_search_qualGrupo,
        WIDGET_select_qualTipo,
        WIDGET_select_qualPeriodoVisualizacaoGrafica,
        WIDGET_select_escolhaIntervaloAtualizacao_KPI,
        WIDGET_select_escolhaIntervaloAtualizacao,
        WIDGET_select_manterWidgetPainel,
        WIDGET_select_qualPeriodoCalculoKPI,
        WIDGET_select_qualParametroBaseReferencia,
        WIDGET_radio_sim_utilizarMediaReferencia,
        WIDGET_radio_nao_utilizarMediaReferencia,
        WIDGET_radio_mediaGrupo_classificarPeloKPI,
        WIDGET_radio_outro_classificarPeloKPI,
        WIDGET_inputText_qualidadeAmostragemQA,
        WIDGET_radio_padrao_indicador,
        WIDGET_radio_personalizado_indicador,
        WIDGET_botoes,
        WIDGET_nomeCampo_exibirQualValor,
        WIDGET_select_exibirQualValor }