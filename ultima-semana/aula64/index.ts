// Exercício 1

const words = (inputA:string, inputB:string): boolean => {
  
  if (Math.abs(inputB.length - inputA.length) > 1) return false;
  
  if (inputA.length > inputB.length) return inputA.includes(inputB)
  
  if (inputB.length > inputA.length) return inputB.includes(inputA)

  let charCount = 0
  for (let i = 0; i < inputA.length; i++) {
    if (inputA[i] !== inputB[i]) charCount++
  }  

  return charCount === 1
}

console.log(words("banana", "banan"))
console.log(words("panana", "banana"))
console.log(words("amora", "amo"))