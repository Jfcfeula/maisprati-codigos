const readline = require('readline-sync');

let nota = undefined

while (true) {
    nota = readline.question('Escreva a sua nota:');
    nota = Number(nota)
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        break;
    }

    console.log('Digite um número inteiro válido.');
}

if (nota > 7) {
    console.log('Parabéns! Você está aprovado.');
} else if (nota > 3) {
    console.log('Você ficou em recuperação.');
} else {
    console.log('Bah, vai ter que repetir o ano. REPROVADO!');
}


