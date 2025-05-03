const readline = require('readline-sync');

let peso = readline.questionFloat('Escreva o seu peso (em kg):');
let altura = readline.questionFloat('Escreva a sua altura (em m):');
let imc = peso / altura ** 2

if (imc < 18.5) {
    console.log('Você está abaixo do peso.');
} else if (imc < 25) {
    console.log('Parabéns! Você está com o peso normal.');
} else if (imc < 30) {
    console.log('Você está com sobrepeso.');
} else {
    console.log('Você está com obesidade.');
}