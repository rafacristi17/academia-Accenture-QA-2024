const SELECT_MARCA = '#make'
const SELECT_MODELO = '#model'
const INPUT_CILINDRADA = '#cylindercapacity'
const INPUT_MOTOR = '#engineperformace'
const DATA_FABRICACAO = '#dateofmanufacture'
const NUMERO_DE_ACENTOS = '#numberofseats'
const TIPO_COMBUSTIVEL = ''

Cypress.Commands.add('selecionarMarca', () => {
    cy.get(SELECT_MARCA).select('Honda'); 
});
Cypress.Commands.add('selecionarModelo', () => {
    cy.get(SELECT_MODELO).select('Motorcycle'); 
});
Cypress.Commands.add('cilindrada', (cilindro) => {
    cy.get(INPUT_CILINDRADA).type(cilindro);
});
Cypress.Commands.add('desempenhoMotor', (desempenho) => {
    cy.get(INPUT_MOTOR).type(desempenho);
});
Cypress.Commands.add('dataFabricacao', (data) => {
    cy.get(DATA_FABRICACAO).type(data);
});
Cypress.Commands.add('selecionarNuAcentos', () => {
    cy.get(NUMERO_DE_ACENTOS).select('No'); 
});
Cypress.Commands.add('tipoCombustivel', () => {
    cy.get(SELECT_MODELO).select('Motorcycle'); 
});