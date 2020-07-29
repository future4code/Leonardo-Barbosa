// Exercícios de interpretação de código


/* 1 - Se o resto da divisão do número que o úsuario digitou for igual a 0 ele passou no teste.
Se o resto for diferente de 0 ele não passou. */

// 2.A - uma lista de frutas com seus preços, no qual ao digitar a fruta ele irá mostar o seu valor.

// 2.B - O preço da Maçã é R$ 2.25

// 2.C - o preço da fruta pêra é R$ 5.5 5 

// 3.A - Está mudando a variável digitada de String para Number

// 3.B - Esse número passou no teste 
// 3.B - Não tem retorno

// 3.C - Não será impresso a variável mensagem pois o bloco pai não tem acesso ao bloco filho.


// Exercícios de escrita de código

// 4 

const idade = Number(prompt("Qual a sua idade?"))
let idadeDigitada = idade

if (idadeDigitada >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


// 5 


let turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turno === "m"){
    console.log("Bom-Dia")
} else if(turno === "v"){ 
    console.log("Boa-Tarde")
} else if (turno === "n") {
    console.log("Boa-Noite")
} else {
    console.log("Tente novamente")
}


// 6
let turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turno){
    case "m":
        console.log("Bom-Dia")
        break
    case "v":
        console.log("Boa-Tarde")
        break
    case "n":
        console.log("Boa-Noite")
        break
    default:
        console.log("Tente novamente")
        break
}


// 7
let filme = prompt("Qual o gênero de filme que iremos assistir?")
let ingresso = Number(prompt("Qual é o valor do ingresso?"))

if (filme === "fantasia" & ingresso < 15){
    console.log("Bom filme!")

}   else{
    console.log("Escolha outro filme :(")
}

   