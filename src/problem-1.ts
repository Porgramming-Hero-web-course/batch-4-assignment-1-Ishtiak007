{
  //problem-1
  //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  // Function --->sumArray()
  function sumArray(numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }

  // Sample Input:
  console.log(sumArray([1, 2, 3, 4, 5]));

  // Output will be: 15
}
