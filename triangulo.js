const readline = require('readline-sync');

let A = readline.questionFloat('Escreva o valor do lado A:');
let B = readline.questionFloat('Escreva o valor do lado B:');
let C = readline.questionFloat('Escreva o valor do lado C:');

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
