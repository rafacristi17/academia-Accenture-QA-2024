#utf -8
#language: pt

Funcionalidade: abaVehicleData - validacao da aba Vehicle Data 
Cenário: validacao aba Vehicle Data do site da Tricentis
    Dado que acesso o portal Tricents para uma cotacao de seguro veicular
    E seleciono a marca da moto
    E seleciono o modelo da moto
    E seleciono a cilindrada da moto
    E seleciono o desempenho do motor
    E seleciono a data de fabricacao
    E seleciono o numero de assentos
    E seleciono o tipo de combustível
    E digito o preço de compra do veiculo
    E digito o placa do veiculo
    E digito a quilometragem anual do veiculo
    Quando clico em next
    Então devo ser direcionado para aba Product Data
