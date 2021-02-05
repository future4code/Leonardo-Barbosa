const findMissingNumber = (arr: number[]): number => {
  const expectedSum = 5050;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return expectedSum - sum;
};

console.log(findMissingNumber([1,2,3,4,5,6,8,9,10,11]))