const INPUT_STARTDATE = '#startdate'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_MERIT_RATING  = '#meritrating'
const SELECT_DAMAGE_INSURANCE  = '#damageinsurance'
const CHECK_OPTONAL_PRODUCTS = '#EuroProtection'
const COURTESY_CAR = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'


Cypress.Commands.add('preencherDadosVeiculoAbaProduto', (dados) => {
    cy.get(INPUT_STARTDATE).type(Cypress.env('dataDeInicio'), {log:false});
    cy.get(SELECT_INSURANCE_SUM).select("3.000.000,00");
    cy.get(SELECT_MERIT_RATING).select("Bonus 1");
    cy.get(SELECT_DAMAGE_INSURANCE).select("No Coverage");
    cy.get(CHECK_OPTONAL_PRODUCTS,{time:10000}).check(Cypress.env('Euro Protection'), {force:true}); 
    cy.get(COURTESY_CAR).select('Yes');
});

Cypress.Commands.add('proximaPaginaProduct', () => {
    cy.get(BTN_NEXT).click();
});

