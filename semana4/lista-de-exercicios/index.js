// Exercícios de interpretação de código

// 1 - Será impresso R$ 543 / com o dólar a R$ 5,43
// 2 - Será impresso no novoMontante 165 e no segundoMontante "Tipo de investimento informado incorreto!"
// 3 - Será impresso no primeiro "Quantidade total de números 14", no segundo array 6 e no terceiro 8
// 4 - 

// Exercícios de Lógica de Programação

// 1 - //while, For e For... of... 
//     const numeros = [45, 65, 2, 77, 12]
//     for (let numero of numeros){
//         console.log(numero)
//     }

// 2 - A False 
//   - B False  
//   - C False 
//   - D True 
//   - E True

// 3 - 
// const quantidadeDeNumerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  for(let num of quantidadeDeNumerosPares){
//      if (num % 2 === 0){
//          console.log(num)
//      }
//  }

// 4 -
// const a = Number(prompt("Digite o tamanho do lado a"))
// const b = Number(prompt("Digite o tamanho do lado b"))
// const c = Number(prompt("Digite o tamanho do lado c"))

// if (a !== b && b !== c && a !== c){
//     console.log("Triângulo Escaleno")
// } else if ( a === b && b === c && a === c){
//     console.log("Triângulo Equilátero")
// } else {
//     console.log("Triângulo Isósceles")
//}

// 5 -
// const numeroUm = Number(prompt("Digite um Número"))
// const numeroDois = Number(prompt("Digite um Número"))
    
//     if (numeroUm > numeroDois){
//         console.log(`O maior é: ${numeroUm}`)
//     } else {
//         console.log(`O maior é: ${numeroDois}`)
//     }

//     if (numeroUm % numeroDois === 0){
//         console.log(`${numeroUm} é divisível por ${numeroDois}`)
//     } else{
//         console.log(`${numeroUm} não é divisível por ${numeroDois}`)
//     }

// const resultado = (numeroUm - numeroDois)
//     if (resultado >= 0){
//     console.log(`A diferença entre eles é ${resultado}`)
//     }


// Exercícios de Funções

// 1 
    
    // function recebeArray(array){
    //     const arrayRecebido = array
    //     console.log(arrayRecebido)
        
    // }

    // recebeArray([2, 3, 4, 5, 6])

// 2 

    // let funcaoNaoNomeada = (recebealerta) => {
    //     return recebealerta
    // } 

    // const resultado = funcaoNaoNomeada(alert("Hello Future4"))

// Exercícios de Objetos

// 1 - Objetos são formas de representar dados complexos de uma maneira organizada e Arrays seria uma lista de itens que podemos acessar.

// 2 
    // function criaRetangulo (lado1, lado2) {
    //     const largura = lado1
    //     console.log(lado1)
    //     const altura = lado2
    //     console.log(lado2)
    //     const perimetro = 2 * (lado1 + lado2)
    //     console.log(perimetro)
    //     const area = lado1 * lado2
    //     console.log(area)
    // }
    //     criaRetangulo(20, 30)

// 3 
    // const filmeFavorito = {
    //     Título: ["O poderoso chefão", "Era uma vez no oeste"],
    //     Ano: ["1972", "1969"],
    //     Diretor: ["Francis Ford Coppola", "Sergio Leone"],
    //     Atores: ["Marlon Brando, Al Pacino, James Caan", "Henry Fonda, Charles Bronson, Frank Wolff"]
    // }
    //     console.log(`Venha assistir ao ${filmeFavorito.Título[0]}, de ${filmeFavorito.Ano[0]}, dirigido por ${filmeFavorito.Diretor[0]} e estrelado por ${filmeFavorito.Atores[0]}`)
    //     console.log(`Venha assistir ao ${filmeFavorito.Título[1]}, de ${filmeFavorito.Ano[1]}, dirigido por ${filmeFavorito.Diretor[1]} e estrelado por ${filmeFavorito.Atores[1]}`)

// 4 
//     const formulario = [
//         {nome: "Ana"} ,
//         {idade: 50},
//         {endereço: "Rua próximo do nada"},
//         {email: "email@email.com" }   
// ]

//   formulario.forEach((elementoDoArray, index, array) => {
//     elementoDoArray.nome = "anônimo"
// })

// console.log(formulario)
