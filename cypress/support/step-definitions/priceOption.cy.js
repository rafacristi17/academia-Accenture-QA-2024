import {Given, And, When,Then} from 'cypress-cucumber-preprocessor/steps'

Then('selecionei a opção de preco', () => {
    cy.selectpreco();
});
And('cliquei em next para finalizar o envio da cotacao', ()=>{
    cy.proximaPaginaFim();
})