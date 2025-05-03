const readline = require('readline-sync');

const A = parseFloat(readline.question('Digite o valor do lado A: '));
const B = parseFloat(readline.question('Digite o valor do lado B: '));
const C = parseFloat(readline.question('Digite o valor do lado C: '));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log('Os lados formam um triângulo Equilátero.');
    } else if (A === B || A === C || B === C) {
        console.log('Os lados formam um triângulo Isósceles.');
    } else {
        console.log('Os lados formam um triângulo Escaleno.');
    }
} else {
    console.log('Os lados fornecidos não formam um triângulo.');
}
