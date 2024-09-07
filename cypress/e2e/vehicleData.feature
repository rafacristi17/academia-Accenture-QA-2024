#utf -8
#language: pt

Funcionalidade: abaVehicleData - validacao da aba Vehicle Data 
Cenário: validacao aba Vehicle Data do site da Tricentis
    Dado que acesso o portal Tricents para uma cotacao de seguro veicular
    E preencho os dados do veículo como por exemplo as seguintes informações:
        | Campo                       | Valor      |
        | Marca                      | Honda      |
        | Modelo                     | Motorcycle |
    Então clico em next
