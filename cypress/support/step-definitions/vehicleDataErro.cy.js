import {Given, And, When,Then} from 'cypress-cucumber-preprocessor/steps'

And('preencho os dados do veículo como por exemplo as seguintes informações:', (dataTable) => {
    const dados = dataTable.rowsHash();
    cy.preencherDadosVeiculo(dados);
});

Then('clico em next sou direcionada para proxima aba', () => {
    cy.proximaPagina();
});
