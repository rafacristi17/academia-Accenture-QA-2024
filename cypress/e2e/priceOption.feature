#utf -8
#language: pt

Funcionalidade: Continuacao da Cotação de Seguro Veicular na aba Price Option

Cenário: Continuar preenchendo os dados necessários para a cotação
   Dado que acesso o portal Tricents para uma cotacao de seguro veicular
    E preencho os dados do veículo como por exemplo as seguintes informações:
        | Campo                      | Valor      |
        | Marca                      | Honda      |
        | Modelo                     | Motorcycle |
    E clico em next sou direcionada para proxima aba
    E continuo preenchendo os dados do segurado:
        | Campo             | Valor            |
        | pais              | Brazil           |
        | ocupacao          | Employee         |
        | hobbies           | Bungee Jumping   |
    E clico em next sou direcionada para a aba product data
    E preencho os dados do produto:
        | Campo             | Valor            |
        | tipo de bonus     | Bonus 1          | 
        | seguro de danos   | No Coverage      |
        | opcionais         | Euro Protection  |
        | carro cortesia    | Yes              |
    E clico em next sou direcionada para a aba opcoes de preco
    Então selecionei a opção de preco
    E cliquei em next para finalizar o envio da cotacao