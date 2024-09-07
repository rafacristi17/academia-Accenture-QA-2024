import {Given, And, When,Then} from 'cypress-cucumber-preprocessor/steps'

And('continuo preenchendo os dados do segurado:', (dataTable) => {
    const dados = dataTable.rowsHash();
    cy.preencherDadosVeiculoAbaInsurant(dados);
});

Then('clico em next sou direcionada para a aba product data', () => {
    cy.proximaPaginaInsurant();
});
