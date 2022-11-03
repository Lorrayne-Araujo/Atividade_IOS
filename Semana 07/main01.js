// Ex de se o aluno foi aprovado ou reprovado
var nota = window.prompt('Qual a sua nota?');

if (nota < 7) {
    window.alert(`Sua nota é ${nota} e você foi reprovado`)
} else {
    window.alert('Você foi aprovado')
}

window.alert('Estude mais')

// Verifica se o aluno esta de uniforme e se ele pode assistir a aula

var uni = window.prompt('Você está de uniforme?');
var cracha = window.prompt('Você está de crachá?');

if (uni.toLowerCase() == 'sim' && cracha.toLowerCase() == 'sim') {
    window.alert('Você pode assistir a aula')
} else {
    window.alert('Você não pode assistir a aula')
} 

// Verifica se o aluno foi aprovado

var nota1 = Number(window.prompt('Digite a primeira nota'))
var nota2 = Number(window.prompt('Digite a segunda nota'))
var media = (nota1 + nota2) / 2

if (media >= 7){
    window.alert('Você foi aprovado')
} 
else if (media >= 6){
    window.alert('Aprovado por conselho ')
}
else {
    window.alert('Você foi reprovado')
}

// Verifica qual a nota que o cliente deu

window.alert('Digite uma nota de 1 à 3')
var nota = window.prompt('Avalie nosso atendimento')

switch(nota) {
    case "1":
        window.alert('Péssimo!')
        break;
    case "2":
        window.alert('Regular!')
        break;
    case "3":
        window.alert('Otimo!')
        break;
}