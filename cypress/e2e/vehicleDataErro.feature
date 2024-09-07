#utf -8
#language: pt

Funcionalidade: Validação da aba Vehicle Data 
Cenário:Testar se a aba Vehicle Data não avança para a próxima tela com dados obrigatórios incorretos.
    Dado que acesso o portal Tricents para uma cotacao de seguro veicular
    E preencho os dados do veículo como por exemplo as seguintes informações:
        | Campo                       | Valor      |
        | Marca                      | Honda      |
        | Modelo                     | Motorcycle |
    Então clico em next sou direcionada para proxima aba
