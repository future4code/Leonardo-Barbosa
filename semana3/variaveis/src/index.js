
/* Exercícios de interpretação de código:
1 - 10 e 10 5
2 - 10 20 10
*/

//Exercícios de Escrita de código:

//Exercício 1

//A
var nome 

//B
var idade

//C
console.log(typeof(nome))
console.log(typeof(idade))

//D
// Foi impresso undefined porque não foi atribuído um valor para as variáveis.

//E
var nome1 = prompt("Qual o seu nome?")
var idade1 = prompt("Qual a sua idade?")

//F
console.log(typeof(nome1))
console.log(typeof(idade1))
// Após atribuir valores as variáveis ele mudou para string pois estão dentro de aspas.

//G
console.log("Olá", nome1, "você tem", idade1, "anos" )


//Exercício 2


var filme = prompt("Qual o seu filme favorito?")
var serie = prompt("Qual a sua série favorita?")
var livro = prompt("Qual o seu livro favorito?")
var banda = prompt("Qual a sua banda favotira?")
var time = prompt("Qual o seu time favorito?")

console.log("Qual o seu filme favorito?")
console.log("Resposta:", filme)
console.log("Qual a sua série favorita?")
console.log("Resposta:", serie)
console.log("Qual o seu livro favorito?")
console.log("Resposta:", livro)
console.log("Qual a sua banda favotira?")
console.log("Resposta:", banda)
console.log("Qual o seu time favorito?")
console.log("Resposta:", time)


//Exercício 3


var comida = ["lasanha", "macarronada", "pizza", "peixe", "feijoada"]

//A
console.log(comida)

//B
console.log("Essas são as minhas comidas preferidas:")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

//C
var fruta = prompt("Qual sua fruta favotira?")

console.log("qual sua fruta favorita?")
console.log(fruta)

comida [1] = fruta

console.log("Essas são as minhas comidas preferidas:")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

// Exercício 4

//A
var perguntas = ["Você já almoçou?", "Você está estudando?", "Você está com sono?" ]
var respostas = [true, false]

//B
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[0])
console.log(perguntas[2], respostas[1])