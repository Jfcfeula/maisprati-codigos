const readline = require('readline-sync');

console.log('MENU INTERATIVO ☺');
console.log('1 - Verificar se um número é par ou ímpar');
console.log('2 - Calcular o quadrado de um número');
console.log('3 - Sair');

const opcao = readline.question('Escolha uma opção (1, 2 ou 3): ');

switch (opcao) {
    case "1":
        let num1 = Number(entrada.question('Digite um número inteiro: '));
        if (!isNaN(num1) && Number.isInteger(num1)) {
            if (num1 % 2 === 0) {
                console.log(`${num1} é par.`);
            } else {
                console.log(`${num1} é ímpar.`);
            }
        } else {
            console.log('Digite um número inteiro.');
        }
        break;

    case "2":
        let num2 = Number(entrada.question('Digite um número: '));
        if (!isNaN(num2)) {
            console.log(`O quadrado de ${num2} é ${(num2 * num2).toFixed(2)}.`);
        } else {
            console.log("Valor inválido. Por favor, digite um número.");
        }
        break;

    case "3":
        console.log('Encerrando o programa...');
        break;

    default:
        console.log('Opção inválida. Escolha 1, 2 ou 3.');
}
