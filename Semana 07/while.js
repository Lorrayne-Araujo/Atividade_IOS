// Passa por um loop até se o número for maior ou igual a 0
var n1 = 10;

while (n1 >= 0) {
    console.log(`Valor é ${n1}`)
    n1--
}
console.log('Final do programa')


// Passa por um loop até se o número for menor que ou igual 10
var n2 = 0;

do {
    console.log(`Valor: ${n2}`);
    n2++;
} while (n2 <= 10);
console.log('Final do programa');

// Maneiras diferentes de verificar se o salario é menor que 3000, somando de 200 em 200

// Maneira 01
var din = 1000;

while (din < 3000) {
    console.log(`Tenho R$ ${din} até o momento`);
    din += 200;
}
console.log(`Cheguei em ${din}, posso ir viajar`);

// Maneira 02
var dinheiro = 1000;

do {
    console.log(`Tenho R$ ${dinheiro} até o momento`);
    dinheiro += 200;
} while (dinheiro < 3000);
console.log(`Cheguei em ${dinheiro}, posso ir viajar`);

// Maneira 03
for (var salario = 1000; salario < 3000; salario += 200) {
    console.log(`Tenho R$ ${salario} até o momento`);
}
console.log(`Cheguei em ${salario}, posso ir viajar`);