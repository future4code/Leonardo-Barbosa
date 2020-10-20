// A - Apresenta um erro informando que o tipo é diferente do atribuido.

// const minhaString: string = 20;


// B - Podemos usar o chamado unio type | após o number e atribuir o tipo string.

// const meuNumero: number | string =  20;

// const meuNovoNumero: number | string =  'arroz';


// C -

// const pessoa: person = {
//     nome: 'teste',
//     idade: 0, 
//     corFavorita:'teste'
// }

// type person = {
//     nome: string,
//     idade: number, 
//     corFavorita: string
// }


// D - E

// enum ARCO_IRIS {
//     VIOLETA = 'violeta', 
//     ANIL = 'anil', 
//     AZUL = 'azul', 
//     VERDE = 'verde', 
//     AMARELO = 'amarelo', 
//     LARANJA = 'laranja', 
//     VERMELHO = 'Vermelho'
// }

// type person = {
//     nome: string,
//     idade: number, 
//     corFavorita: ARCO_IRIS
// }

// const pessoaUm: person = {
//     nome: 'joao',
//     idade: 15, 
//     corFavorita: ARCO_IRIS.AZUL
//      }
// const pessoaDois: person = {
//     nome: 'maria',
//     idade: 20, 
//     corFavorita: ARCO_IRIS.VERMELHO
//      }
// const pessoaTres: person = {
//     nome: 'josé',
//     idade: 25, 
//     corFavorita: ARCO_IRIS.VERDE
//      }