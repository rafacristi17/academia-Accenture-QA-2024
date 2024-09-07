const INPUT_FIRSTNAME='#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_BIRTHDATE = '#birthdate'
const SELECT_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const SELECT_OCCUPATION = '#occupation'
const INPUT_HOBBIES = '#bungeejumping'
const BTN_NEXT = '#nextenterproductdata'


Cypress.Commands.add('preencherDadosVeiculoAbaInsurant', (dados) => {
    cy.get(INPUT_FIRSTNAME).type(Cypress.env('primeiroNome'), {log:false});
    cy.get(INPUT_LASTNAME).type(Cypress.env('ultimoNome'),{log:false});
    cy.get(INPUT_BIRTHDATE).type(Cypress.env('dataNascimento'), {log:false});
    cy.get(SELECT_COUNTRY).select(Cypress.env('pais'));
    cy.get(INPUT_ZIPCODE).type(Cypress.env('cep'), {log:false});
    cy.get(SELECT_OCCUPATION).select(Cypress.env('ocupacao'));
    cy.get(INPUT_HOBBIES).type(Cypress.env('hobbies'),{log:false});
});

Cypress.Commands.add('proximaPaginaInsurant', () => {
    cy.get(BTN_NEXT).click();
});

