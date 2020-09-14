// // Exercícios de interpretação de código

// // Exercício 1

// /*
// A - 10 e 50
// B - Não seria impresso no console
// */

// // Exercício 2 

// /*
// A - Darvas e Goli 
// B - Amanda e Caio 
// */

// // Exercício 3 - Está sendo add a variável arrayFinal todos os números pares vezes ele mesmo.


// // Exercícios de escrita de código

// // Exercício 4

// // Exercício 4.A

// function aboutMe() {
//     console.log("Eu sou Leonardo, tenho 28 anos, moro no Rio de Janeiro e sou estudante.")
// } 
//     aboutMe()

// // Exercício 4.B

// function aboutMeTwo(nome, idade, cidade, estudante){
   
//     if ( estudante === true){
//     console.log(`Me chamo ${nome}, tenho ${idade}, moro no ${cidade} eu sou estudante.`)
//    } else{
//     console.log(`Me chamo ${nome}, tenho ${idade}, moro no ${cidade} eu não sou estudante.`)
//    }
// }
//     const resultado = aboutMeTwo ("Leonardo", 28, "Rio de janeiro", true )
    

// // Exercício 5

// // Exercício 5.A

// function somaDeNumeros(numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
// }

// const resultado = somaDeNumeros(1398, 256)
// console.log(resultado)

// //Exercício 5.B

// function somaDeNumeros(numero1, numero2) {

//     if (numero1 >= numero2){
//         console.log("o primeiro número é maior ou igual ao segundo")
//     } else{
//         console.log("o primeiro número não é maior ou igual ao segundo")
//     }

// }
// const resultado = somaDeNumeros(3,10)
// console.log(resultado)


// // Exercício 5.C

// function recebeString(texto){
    
//     const textoRecebido = texto
//     let vezes = 0

//     while (vezes < 10){
//         console.log(textoRecebido)

//         vezes++
//     }
//     return textoRecebido
// }

//     const textoDigitado = recebeString(prompt())
   

// // Exercício 6


// // Exercício 6.A
//     function verificaArrey(arrayrecebido){
      
//         return arrayrecebido.length
//     }

//     const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//     const quantidadeDeElementos = verificaArrey(array)
//     console.log("Quantidade de elementos é:", quantidadeDeElementos)

// // Exercício 6.B
//     function recebeUmNumero(numero){

//         const resultado = numero
//         if (resultado % 2 === 0){
//             console.log("Esse número é par!")
//         } else{
//             console.log("Esse numero é ímpar")
//         }
        
//     }
//         const numeroDigitado = RecebeUmNumero(prompt())

// // Exercício 6.C
//     function recebeOutroArray(arrayRecebido){
//         let arrayFinal = []
        
//         for (let par of arrayRecebido){
//             if (par % 2 === 0){
//                 arrayFinal.push(par)
                
//             }
//         }
        
//         return arrayFinal
//     }
//     const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//     const arrayPares = recebeOutroArray(array)
//     console.log(arrayPares)


// // Exercício 6.D 

// function recebeOutroArray(arrayRecebido){
//         let arrayFinal = []
        
//         for (let par of arrayRecebido){
//             if (par % 2 === 0){
//                 arrayFinal.push(par)
//                 console.log("Esses números são pares!")
                
//             }
//         }
        
//         return arrayFinal
//     }
//     const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//     const arrayPares = recebeOutroArray(array)
//     console.log(arrayPares)

