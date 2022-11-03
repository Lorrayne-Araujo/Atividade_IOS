// Verifica qual cachorro está no indice 2
const dogs = ['pitoco', 'theo', 'scott'];

console.log(dogs[2]); 


var tccLider = ['Lucas', 'Lorrayne', 'Janayna', 'Giovanna']
//Retorna a letra que está no indice 0 e posição 1
console.log(tccLider[0][1])
// Tira o ultimo item do array e adiciona em outro
var exLider = tccLider.pop()
console.log(tccLider);
console.log(exLider); 
// Verifica quantos itens tem dentro do array
console.log(tccLider.length);
// Adiciona o item na ultima posição
tccLider.push ('Ermerson');
console.log(tccLider)
// Exclui o primeiro item 
tccLider.shift()
console.log(tccLider)
//Adiciona o item na primeira posição
tccLider.unshift('Carla')
console.log(tccLider) 

// Verifica o tipo das variaveis
var nota = [2, 7, 5, 3];
var notastr = nota.toString();
console.log(typeof nota);
console.log(typeof notastr); 

// Acessando itens dentro do objeto de maneiras diferentes

//Maneira 01
var cadPessoa = {
    nome: 'Lorrayne',
    sobreNome: 'Araujo',
    idade: 20,
    nCartao: 125825647,
    cvv: 777,
    endereco: {
        rua: 'ubatuba',
        numero: 025,
        estado: 'SP',
    }
}
console.log(`A ${cadPessoa.nome} tem ${cadPessoa.idade} anos e mora na rua ${cadPessoa.endereco.rua}`) 

//Maneira 02
var nomeAluno = {
    nome: 'Lorrayne',
    sobreNome: 'Araujo',
    idade: 20,
    cel: 1140028922,
    endereco: {
        rua: 'rua ubatuba',
        cep: 25885677,
    }
}

const {
    nome,
    sobreNome,
} = nomeAluno

console.log(`O nome é ${nome} e sobrenome é ${sobreNome
}`) 

//Maneira 03
var alunos = [
    {
        nCha: 25,
        RA: 2544,
        nome: 'Lorrayne',
    },
    {
        nCha: 26,
        RA: 2545,
        nome: 'Janayna tia',
    },
    {
        nCha: 27,
        RA: 2546,
        nome: 'Menina gi',
    },
];

console.log(alunos)
console.log(alunos[2].RA)

//Maneira 04
var alunos = {
    nCha: 25,
    RA: 2544,
    nome: 'Lorrayne',
};

var alunosJson = JSON.stringify(alunos);
console.log(alunosJson);
var alunosObj = JSON.parse(alunosJson);
console.log(alunosObj) 