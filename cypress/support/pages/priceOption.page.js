const SELETOR_PRECO = '#selectgold';
const BTN_NEXT= '#nextsendquote';

Cypress.Commands.add('selectpreco', () => {
    cy.get(SELETOR_PRECO).click({ force: true });
})
Cypress.Commands.add('proximaPaginaFim', () => {
    cy.get(BTN_NEXT).click();
});