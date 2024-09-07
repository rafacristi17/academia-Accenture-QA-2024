# Desafio Accenture Academia QA 2024


# Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados para o site de exemplo [https://sampleapp.tricentis.com/101/app.php](https://sampleapp.tricentis.com/101/app.php) utilizando o Cypress. Os testes avaliam a funcionalidade de quatro abas distintas e incluem um teste específico para validar erros de expressão regular para caracteres regulares.

## Funcionalidades Testadas

Os testes automatizados abordam as seguintes abas do site:

1. **Aba Vehicle Data**
2. **Aba Insurant Data**
3. **Aba Product Data**
4. **Aba Price Option**

Além disso, o repositório inclui um teste específico para verificar a validação de uma expressão regular para caracteres regulares, demonstrando um erro esperado.

## Estrutura do Repositório

- **`/cypress`**: Contém os testes e a configuração do Cypress.
  - **`/integration`**: Testes automatizados organizados por funcionalidade.
    - **`vehicleData.spec.js`**: Testes para a aba Vehicle Data.
    - **`insurantData.spec.js`**: Testes para a aba Insurant Data.
    - **`productData.spec.js`**: Testes para a aba Product Data.
    - **`priceOption.spec.js`**: Testes para a aba Price Option.
    - **`regexValidation.spec.js`**: Teste para validar a expressão regular.
  - **`/fixtures`**: Dados de teste e recursos necessários.
  - **`/support`**: Arquivos de suporte e configurações adicionais.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm ou yarn

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as dependências :

npm install

3. Execute os testes : 

    npx cypress open


# Detalhes dos Testes

## Aba Vehicle Data

- Objetivo: Verificar a funcionalidade da aba Vehicle Data.
- Testes Incluídos: Validação de campos obrigatórios, navegação entre  abas e controle de erros.

## Aba Insurant Data

- Objetivo: Testar a funcionalidade da aba Insurant Data.
- Testes Incluídos: Validação de dados de segurado, campos obrigatórios e navegação.

## Aba Product Data

- Objetivo: Avaliar a funcionalidade da aba Product Data.
-Testes Incluídos: Validação dos produtos selecionados e informações associadas.

## Aba Price Option

- Objetivo: Verificar a aba Price Option.
- Testes Incluídos: Validação das opções de preço e cálculo final.

## Teste de Expressão Regular

- Objetivo: Validar a expressão regular para caracteres regulares.
- Descrição: Teste para verificar que a aplicação mostra um erro apropriado ao inserir caracteres inválidos em campos específicos que devem seguir uma expressão regular.

- Cenário: Inserir caracteres inválidos e confirmar que a mensagem de erro exibida corresponde ao esperado.


Contato
Para dúvidas ou mais informações, entre em contato com rafaelacristine@live.com.
