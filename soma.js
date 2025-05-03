const readline = require('readline-sync');

let soma = 0;
for (let x = 0; x < 4; x++) {
    let numero = readline.questionFloat('Escreva um número:');
    soma += numero
}
console.log(`A soma dos cinco números escolhidos é igual a ${soma}.`);