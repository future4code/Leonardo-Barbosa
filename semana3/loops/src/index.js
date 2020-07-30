// Exercícios de interpretação de código

// 1 
// O código está num loop iniciando do 0 até chegar ao número menor que 5.
// Será impresso 0, 1, 2, 3, 4.

// 2
// 2. A - Será impresso todos os números maiores que 18.
// 2. B - Sim. Podemos fazer assim :

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let maior = 0
for (let numero of lista) {
  if (numero > 0) {
        maior = numero
        console.log(numero)
    }
} */

// Desafio 1 
/*  0
    00
    000
    0000
*/  

// Exercícios de escrita de código


// Exercício 3

let arrayOriginal = [10, 11, 30, 40, 50, 53, 27]
let maiorNumero = 0

// // 3.A
for (let numero of arrayOriginal){
    console.log(numero)
}

// 3.B
for (let numero of arrayOriginal){
    const divi = numero/10
    console.log(divi)
    }

// 3.C
for (let numero of arrayOriginal){
    if (numero % 2 === 0){
        console.log(numero)
    }
    }

// 3.D
let lista  = [14, 67, 89, 15, 23]
let novaLista = []

for(let i = 0; i < 5; i++){
    novaLista.push(`O elemento do index ${i} é ${lista[i]}`)
}

console.log(novaLista)

// 4 
let lista  = [14, 67, 89, 15, 23, 33, 56, 2, 4]
let maximo = 0
  
  for(let num of lista){
    if (num > maximo){
      maximo = num
    }
  }
  let minimo = maximo

for(let num2 of lista){
    if (num2 < minimo){
      minimo = num2
    }
  }
  console.log(`O Máximo é ${maximo} e o Mínimo é ${minimo}`)