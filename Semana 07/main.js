console.log('Hello world');
console.error ('Está é uma mensagem de erro!');
console.warn('Essa é uma mensagem de aviso!');
console.clear()
// segunda parte de variaveis

let idade = 20;
const nome = 'Lorrayne';
console.log(nome);
console.log(idade);
idade = 21;
console.log(idade);
console.clear()

// terceira parte de variaveis 
const nome_pessoa = 'Loh';
const idade1 = 20;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome_pessoa);
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// quarta parte de variaveis

var txt = 'Café';
console.log('Janayna gosta muito de ' + txt);

// Ex concatenar

var nome1 = window.prompt('Olá, Qual seu nome?');
var idade2 = window.prompt('E qual sua idade?');
window.alert(`Olá, ${nome1} legal saber que você tem ${idade2} anos de idade.`)

var curso = window.prompt('Você está gostando do curso');
window.alert(`Obrigada por sua resposta ${curso}`);

// Ex de calculo

var number1 = 150;
var number2 = 300;
console.log(`A multiplicação de ${number1} por ${number2} é: ${number1 + number2}`);

var number3 = 200;
var number4 = 400;
var resultado = number3 * number4;
console.log(`A multiplicação de ${number1} por ${number2} é: ${resultado}`);

// Ex de retornar caractere

var xy = 'Lorrayne ama muito jogos';
console.log(xy.charAt(7));
console.log(xy [9]);

var txt3 = 'Jesus apaga a luz';
console.log (txt3.length);

// Ex de quantas letras tem seu nome
var nome4 = console.prompt('Olá, qual é seu nome?');
window.alert(`Olá ${nome4} seu nome tem, ${nome4.length} letras`);

// Maiuscula e minusculo
var nome5 = console.prompt('Olá, qual é seu nome?');
window.alert(`${nome5} seu nome em maiscula é ${nome5.toUpperCase()} e em minuscula ${nome5.toLowerCase()}`);