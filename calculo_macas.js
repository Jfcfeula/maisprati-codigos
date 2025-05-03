const readline = require('readline-sync');

let quantidade = readline.questionInt('Escreva o número de maçãs compradas: ');
let preco = 0;

if (quantidade < 12) {
    preco = 0.30;
} else {
    preco = 0.25;
}
const total = quantidade * preco;
console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);



