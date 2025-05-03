const readline = require('readline-sync');

let numero = undefined
while (true) {
    numero = readline.question('Escreva um número inteiro:');
    numero = Number(numero)
    if (!isNaN(numero) && Number.isInteger(numero)) {
        break;
    }

    console.log('Digite um número inteiro.');
}

if (numero % 2 === 0) {
    console.log(`${numero} é par!`);
} else {
    console.log(`${numero} é ímpar!`);
}
