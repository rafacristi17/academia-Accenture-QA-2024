const SELECT_MARCA = '#make'
const SELECT_MODELO = '#model'
const INPUT_CILINDRADA = '#cylindercapacity'
const INPUT_MOTOR = '#engineperformance'
const DATA_FABRICACAO = '#dateofmanufacture'
const NUMERO_DE_ACENTOS = '#numberofseats'
const NUMERO_DE_ACENTOS_MOTORCYCLE= '#numberofseatsmotorcycle'
const TIPO_COMBUSTIVEL = '#fuel'
const CARGA_UTIL = '#payload'
const PESO_TOTAL = '#totalweight'
const PRECO = '#listprice'
const KM_ANUAL = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('preencherDadosVeiculo', (dados) => {
    cy.get(SELECT_MARCA).select(dados.Marca); 
    cy.get(SELECT_MODELO).select(dados.Modelo); 
    cy.get(INPUT_CILINDRADA).type(Cypress.env('cilindrada'), {log:false});
    cy.get(INPUT_MOTOR).type(Cypress.env('DesempenhodoMotor'),{log:false});
    cy.get(DATA_FABRICACAO).type(Cypress.env('DataFabricacao'), {log:false});
    cy.get(NUMERO_DE_ACENTOS).select(Cypress.env('NumeroAssentos'));
    cy.get(NUMERO_DE_ACENTOS_MOTORCYCLE).select(Cypress.env('NumeroAssentosMoto'));
    cy.get(TIPO_COMBUSTIVEL).select(Cypress.env('TipoCombustivel'));
    cy.get(CARGA_UTIL).type(Cypress.env('CargaUtil'),{log:false});
    cy.get(PESO_TOTAL).type(Cypress.env('PesoTotal'), {log:false});
    cy.get(PRECO).type(Cypress.env('Preco'),{log:false});
    cy.get(KM_ANUAL).type(Cypress.env('KMAnual'), {log:false});
});

Cypress.Commands.add('proximaPagina', () => {
    cy.get(BTN_NEXT).click();
});
