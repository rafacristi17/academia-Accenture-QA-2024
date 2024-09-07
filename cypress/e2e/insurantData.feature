#utf -8
#language: pt

Funcionalidade: Continuacao da Cotação de Seguro Veicular na aba Insurant

Cenário: Continuar preenchendo os dados necessários para a cotação
   Dado que acesso o portal Tricents para uma cotacao de seguro veicular
    E preencho os dados do veículo como por exemplo as seguintes informações:
        | Campo                      | Valor      |
        | Marca                      | Honda      |
        | Modelo                     | Motorcycle |
    E clico em next sou direcionada para proxima aba
    E continuo preenchendo os dados do segurado:
        | Campo             | Valor            |
        | primeiro nome     | primeiroNome     | 
        | pais              | Brazil           |
        | ocupacao          | Employee         |
        | hobbies           | Bungee Jumping   |
    Então clico em next sou direcionada para a aba product data