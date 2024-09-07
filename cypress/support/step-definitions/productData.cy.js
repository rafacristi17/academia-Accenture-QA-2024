import {Given, And, When,Then} from 'cypress-cucumber-preprocessor/steps'

And('preencho os dados do produto:', (dataTable) => {
    const dados = dataTable.rowsHash();
    cy.preencherDadosVeiculoAbaProduto(dados);
});

Then('clico em next sou direcionada para a aba opcoes de preco', () => {
    cy.proximaPaginaProduct();
});