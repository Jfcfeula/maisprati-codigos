const readline = require('readline-sync');

let numero = undefined;
let soma = 0;
let contador = 0;

while (numero !== 0.0) {
    numero = readline.questionFloat('Escreva um número decimal (digite 0 para parar):');
    if (numero !== 0.0) {
        soma += numero;
        contador++;
    }
}

let media = soma / contador;
console.log(`A média aritmética desses números é igual a ${media.toFixed(2)}`);