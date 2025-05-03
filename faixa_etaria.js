const entrada = require('readline-sync');

let idade = undefined

while (true) {
    idade = entrada.question('Escreva a sua idade:');
    idade = Number(idade)
    if (!isNaN(idade) && Number.isInteger(idade) && idade >= 0) {
        break;
    }

    console.log('Digite um número inteiro válido.');
}

if (idade > 59) {
    console.log('A sua idade está classificada na faixa etária: Idoso.');
} else if (idade > 17) {
    console.log('A sua idade está classificada na faixa etária: Adulto.');
} else if (idade > 12) {
    console.log('A sua idade está classificada na faixa etária: Adolescente.');
} else {
    console.log('A sua idade está classificada na faixa etária: Criança.');
}


