// Exercício 1
const words = (inputA, inputB) => {
    if (Math.abs(inputB.length - inputA.length) > 1)
        return false;
    if (inputA.length > inputB.length)
        return inputA.includes(inputB);
    if (inputB.length > inputA.length)
        return inputB.includes(inputA);
    let charCount = 0;
    for (let i = 0; i < inputA.length; i++) {
        if (inputA[i] !== inputB[i])
            charCount++;
    }
    return charCount === 1;
};
console.log(words("banana", "banan"));
console.log(words("panana", "banana"));
console.log(words("amora", "amo"));
// Exercício 2 
const countRepeatInSeq = (input) => {
    let countCharSeq = 0;
    let lastChar = input[0];
    let stringResult = input[0];
    for (let char of input) {
        if (char === lastChar) {
            countCharSeq++;
        }
        else {
            stringResult += countCharSeq;
            stringResult += char;
            countCharSeq = 1;
        }
        lastChar = char;
    }
    stringResult += countCharSeq;
    return stringResult.length > input.length ? input : stringResult;
};
console.log(countRepeatInSeq("aabbb"));
console.log(countRepeatInSeq("aabcccccaaa"));
console.log(countRepeatInSeq("cidade"));
console.log(countRepeatInSeq("escola"));
console.log(countRepeatInSeq("flamengo"));
