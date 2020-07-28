//Exercícios de interpretação de código

/*
1.  a. True
    b. False
    c. False 
    e. booleans 

2.  a. undefined
    b. null
    c. [11]
    d.  
    e. 
    f. 
*/

//Exercícios de escrita de código


// 1.A 
var idade = prompt("Qual é sua idade?")
console.log("A minha idade é", idade, "anos")

// 1.B
var idadeAmigo = prompt("Qual a idade do seu melhor amigo(a)?")
console.log("A minha idade é", idadeAmigo, "anos")

// 1.C
console.log("A sua idade é maior do que a do seu melhor amigo(a)?")
console.log("false")

// 1.D
var diferenca = Number(idadeAmigo) - Number(idade)
console.log("A diferença de idade é:", diferenca)


// 2.A
var numero = prompt("Digite um numero par:")
var resultado = Number(numero)
console.log(numero)

// 2.B
var restoDivisao = numero%2
console.log(restoDivisao)

// 2.C - O resto da divisão está dando 0 pois um número par divido por 2 não tem resto.

// 2.D - Inserindo um número ímpar e dividir por 2 sempre restará 1.


// 3.A
var listaDeTarefas = []

// 3.B
var pergunta = prompt("Diga 1 tarefa que você precisa realizar:")
var pergunta2 = prompt("Diga 1 tarefa que você precisa realizar:")
var pergunta3 = prompt("Diga 1 tarefa que você precisa realizar:")

var resposta = String(pergunta)
var resposta2 = String(pergunta2)
var resposta3 = String(pergunta3)

listaDeTarefas.push(resposta, resposta2, resposta3)

// 3.C
console.log(resposta , resposta2 , resposta3)

// 3.D
var digite = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2")
var numeroDigitado = Number(digite)

// 3.E
listaDeTarefas.splice(numeroDigitado, 1)

// 3.F
console.log(listaDeTarefas)


// 4
var nome = prompt("Digite seu nome:")
var respostaNome = nome

var email = prompt("Digite seu E-mail:")
var respostaEmail = email

console.log("O E-mail", email, "foi cadastrado com sucesso. Seja bem-vinda(o)", nome,"!")



                         // Desafios


// 1.A

var GRAUS_FAHRENHEIT = 77
var kelvin = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(kelvin + K)

// 1.B

var GRAUS_CELSIUS = 80
var GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
console.log(GRAUS_FAHRENHEIT + '°F') 

// 1.C

var GRAUS_CELSIUS = 30
var GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
console.log(GRAUS_FAHRENHEIT + '°F')
var kelvin = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(kelvin + 'K')


// 1.D

var GRAUS_CELSIUS = prompt('Digite uma temperatura em Celsius:')
var resultadoDigite = GRAUS_CELSIUS
var GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32
console.log(GRAUS_FAHRENHEIT + '°F')
var kelvin = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(kelvin + 'K')


// 2.A

var valor = 0.05
var quilowatt = 280
var resultatoQuilowatt = quilowatt * valor
console.log('R$ ' + resultatoQuilowatt)

// 2.B

var valor = 0.05
var quilowatt = 280
var resultatoQuilowatt = (quilowatt * valor)*0.15
console.log('R$ ' + resultatoQuilowatt)


// 3.A

var libra = 50
var kg = libra / 2.205
console.log('20lb equivalem a ' + kg + ' Kg')

// 3.B

var onca = 10.5
var kg = onca / 3.527
console.log('10.5oz equivalem a ' + kg + ' Kg')

// 3.C

var milha = 100
var metro = milha * 1.609
console.log('100mi equivalem a ' + metro + ' m')

// 3.D

var pes = 50
var metro = pes / 3.281
console.log('50ft equivalem a ' + metro + ' m')

// 3.E

var gal = 103.56
var litro = gal * 379
console.log('103.56gal equivalem a ' + litro + ' l')

// 3.F

var xic = 450
var litro = xic / 3.52
console.log('450 xic equivalem a ' + litro + ' l')

// 3.G


var libra = prompt("Digite um valor:")
var valor = Number(libra)
var kg = libra / 2.205
console.log(valor + "lb equivalem a "  + kg +" kg" )



