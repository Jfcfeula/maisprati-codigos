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
for (let x = 1; x <= 10; x++) {
    console.log(numero);
}