const readline = require('readline-sync');

let n1 = readline.questionFloat('Escreva um número:');
let n2 = readline.questionFloat('Escreva outro número:');

if (n1 > n2) {
    console.log(`${n1} e ${n2}`);
} else {
    console.log(`${n2} e ${n1}`);
}