// Exercício 1 

// Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

const printNumbers = (number: number): void => {
  if (number >= 0) {
    printNumbers(number - 1)
    console.log(number)
  }
}
printNumbers(250)

// Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printNumbersAgain = (number: number): void => {
  if (number >= 0) {
    console.log(number)
    printNumbersAgain(number - 1)
  }
}
printNumbersAgain(100)

// Exercício 2

// Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n

const calculateSum = (number: number, counter: number = 0): number => {
  if (number === 0) {
    return counter
  }
  return calculateSum(number - 1, counter + number)
};

console.log(calculateSum(10))
console.log(calculateSum(30))

// Exercício 3 

// Transforme a função desenvolvida no Exercício 2 em iterativa

const calculateSumAgain = (number: number): number => {
  
  let sum = 0

  for (let i = 0; i <= number; i++) {
      sum += i
  }
  return sum
}

console.log(calculateSumAgain(258))

// Exercício 4 

// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

const printArray = (arr: number[] | string, i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1)
    console.log(`Elemento ${i}: `, arr[i]);
  }
}
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const string = "astrodev"

printArray(array)
printArray(string)