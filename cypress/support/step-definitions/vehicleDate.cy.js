Given('que acesso o portal Tricents para uma cotacao de seguro veicular', () => {
        cy.visit('/app.php');
    });
    
    And('preencho os dados do veículo como por exemplo as seguintes informações:', (dataTable) => {
        const dados = dataTable.rowsHash();
        cy.preencherDadosVeiculo(dados);
    });
    
    Then('clico em next', () => {
        cy.proximaPagina();
    });
    