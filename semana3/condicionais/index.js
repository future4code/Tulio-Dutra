
// function imprimeOlaMundo() {
//     console.log("olá mundo!")
// }

// function area(altura, largura) {
//     const area = altura * largura
//     console.log(area) 
// }

// // calculaArea(2, 5)

// function olaPessoal(nome) {
//     console.log(`Olá $(nome)`)
//     // console.log("Olá", nome) //quando usa vírgula, coloca um espaço entre as palavras
//     // console.log("Olá" + nome) //concatenando as strings, não coloca espaço
// }

// olaPessoal(Índio)

// function somaDoisNumeros(num1, num2){
//     const soma =  num1 + num2
//     return soma
// }

// const resultado = somaDoisNumeros(2, 3)
// const resultado2 = somaDoisNumeros(resultado, 2)
// console.log(resultado2)

// function imprimeArray(array){
//     for (let i = 0; i < array.lenght; i++){
//         console.log(array[i])
//     }
//     return array.lenght
// }

// const array1 = ["a", "b", "c"]
// const array2 = [1, 2, 3]

// const tamanho2 = imprimeArray(array2)

// const olaPessoaExpressao = function (nome) {
//     console.log(`Olá ${nome}`)
// }

// olaPessoaExpressao("Silvio")

const SomaDoisNumeros = (num1, num2) => {
    return num1 + num2
}

const resultado = SomaDoisNumeros(4, 7)
const resultado = SomaDoisNumeros(100, 256)
console.log(resultado)

// Exercícios de interpretação de código

//1: O código pede ao usuário um número para realizar um teste, caso o módulo/resto
// do número seja igual a 2, ou 0, ele passa no teste, números pares. Caso seja
// um número ímpar, cujo o resto seria diferente de 2, ou 0, não passaria no teste.

//2: a: O código serve para automatizar as tarefas do supermercado, o usuário digita
// a fruta que quer comprar, e o código informa a fruta e o valor no final.
// b: O preço da fruta, Maçã, é R$2,25.
// c: O preço da fruta, Pêra, é R$5.

//3: a: A primeira linha serve para pedir ao usuário que digite um código, e transforma
// o valor em Number.
// b: caso o número seja 10, a mensagem do terminal será "Esse número passou no teste"
// caso seja -10 acredito que o código nao vai funcionar, por nao ter outra condição
// c: Sim, pois não existe outra condição a não ser números maiores que 0.

// Exercícios de escrita de código

//4:
// const idade = Number(prompt("Digite a sua idade"))
// if(idade > 18) {
//     console.log("Parabéns, você ja pode dirigir!")
// }
// if(idade < 18) {
//     console.log("Você ainda não pode dirigir.")
// }

//5:
// const turno = prompt("Digite o seu turno, M, V ou N.")
// if(turno === 'M') {
//     console.log("Bom Dia!")
// } else if (turno === 'V') {
//     console.log("Boa Tarde!")
// } else if (turno === 'N') {
//     console.log("Boa Noite!")
// }

//6:
// let turno = prompt("Digite o seu turno, M, V ou N.")
// switch (turno) {
//     case 'M':
//         console.log("Bom Dia!")
//         break;
//     case 'V':
//         console.log("Boa Tarde!")
//         break;
//     case 'N':
//         console.log("Boa Noite!")
//         break    
//     default:
//         break;
// }

//7: + Desafio 1
// const gen = prompt("Digite o gênero do filme")
// if (gen === 'Fantasia') {
//     console.log("Aproveite o filme.")
// }   else {
//     console.log("Escolha outro filme.")
// } 
// const ing = prompt("Digite o valor do ingresso?")
// if (ing < 15) {
//     console.log("Aproveite o filme.")
// }   else {
//     console.log("Escolha outro filme.")
// }
// const snack = prompt("Qual snack voce quer comprar?")
// console.log("... com", snack)

