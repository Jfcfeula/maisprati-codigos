const readline = require('readline-sync');

let numero = undefined
let fatorial;

while (true) {
    numero = readline.question('Escreva um número inteiro positivo: ');
    numero = Number(numero);
    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
        break;
    }
    console.log('Digite um número inteiro positivo.');
}

if (numero === 0 || numero === 1) {
    fatorial = 1;
} else {
    fatorial = numero;
    for (let x = numero - 1; x > 0; x--) {
        fatorial *= x;
    }
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);
