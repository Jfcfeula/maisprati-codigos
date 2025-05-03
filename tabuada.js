const readline = require('readline-sync');

let numero = undefined
while (true) {
    numero = readline.question('Escreva um número inteiro de 1 a 10:');
    numero = Number(numero)
    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 1 && numero <= 10) {
        break;
    }

    console.log('Digite um número inteiro.');
}

for (let x = 1; x <= 10; x++) {
    console.log(`${numero} x ${x} = ${numero * x}`);
}