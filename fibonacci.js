let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

for (let x = 0; x < 10; x++) {
    console.log(a);
    let proximo = a + b;
    a = b
    b = proximo
}
