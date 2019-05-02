# Validador de cartões de crédito v.1.0.0
Esta biblioteca se destina à verificação da sequência de números de cartões de crédito para uso em aplicações web.
Na versão atual, através do Algoritmo de Luhn é capaz de validar os números de um cartão de crédito, evitando erros de digitação.

## Como instalar:
$  npm install cardvalidator-acmc

## Como utilizar:

javascript
> const cardValidator = require('cardvalidator-acmc');
> console.log(cardValidator(4716421870804403))>
> // returns "true"

## versão 1.0.0 (released)
* funcionalidade: validação da sequência de números de um cartão de crédito.
* aceita somente cartões de 16 dígitos.