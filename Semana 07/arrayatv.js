// Trocando valores do array
var lista1 = [
    [1, 2, 3],
    ['Maçã', 'Laranja', 'Kiwi'],
    [4, 5, 6],
    ['Banana', 'Melão', 'Morango']
]
console.log(lista1);
lista1[1][2] = 'uva'
console.log(lista1);
// Declarando array
let jogos  = ['COD', 'GTA', 'UNCHARTED', 'ALBION', 'MARIO']
// Tirando ultimo valor e guardando em outro array
let jogoex = jogos.pop()
console.log(jogoex)
//Adicionando valor na ultima posição
jogos.push ('God');
console.log(jogos);
//Deletando valor que está no indice 1
delete jogos[1];
console.log(jogos);

//Verificando média do aluno
function media(n1, n2) {
    return (n1 + n2) /2;
}
var res = media(8, 9)

console.log(`A média do aluno é ${res}`);

//Verificando se o aluno pode assistir aula de diferentes maneiras

var unif = true;
var cracha = true; 
//Maneira 01
function aula (cracha , unif) {
    if (cracha == true && unif == true)  {
        return 'Pode assistir a aula'
    } else {
        return 'Não pode assistir'
    }
} 
console.log(aula(cracha,unif))

//Maneira 02
function aula(resp) {
    if (resp == 'sim') {
        return 'Pode assistir a aula'
    } else {
        return 'Não pode assistir'
    }
}
var res = aula('sim')
console.log(`Você ${res}`)

// Verificando se o aluno faltou de maneiras diferentes 

//Maneira 01
const alunos = ['Janayna', 'Giovanna', 'Gabriela', 'Robert']

console.log(`O aluno ${alunos[0]} faltou `)
console.log(`O aluno ${alunos[1]} faltou `)
console.log(`O aluno ${alunos[2]} faltou `)
console.log(`O aluno ${alunos[3]} faltou `)

//Maneira 02 e acessando indice
alunos.forEach(fAlunos)
function fAlunos(faltaAlunos){
    console.log(`O aluno ${faltaAlunos} faltou `)
} 

alunos.forEach((nome, indice) => {
    console.log(`O aluno ${nome} faltou `)
    console.log(`O indice é ${indice}`)
}) 

// Disparando email
const email = ['lorraynearaujo925@gmail.com', 'ls.marinho36@gmail.com', 'higorneves2659@gmail.com', 'gabriel.pinheiro1240@gmail.com', 'ucker703@gmail.com']

email.forEach((enviado) =>{
    console.log(`O e-mail foi enviado para ${enviado} com sucesso`)
})

//Acessando informações do objeto
let aluno = [
    {
        nome: 'Lucas',
        med: 8,
    },
    {
        nome: 'Lorrayne',
        med: 9,
    },
    {
        nome: 'Luis',
        med: 8,
    },
];

const medfinal = aluno.map((mFinal) => mFinal.med +1)
console.log(medfinal)