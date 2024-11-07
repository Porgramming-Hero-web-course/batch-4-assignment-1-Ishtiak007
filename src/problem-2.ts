{
  // problem-2
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  type NumberTypeArr = number[];

  // Function ---> removeDuplicates()
  const removeDuplicates = (arr: NumberTypeArr): NumberTypeArr => {
    return [...new Set(arr)];
  };

  // sample inputs:
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  // output: [1,2,3,4,5]

  // input
  console.log(
    removeDuplicates([1, 2, 2, 3, 4, 4, 5, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2])
  );
  // output: [1,2,3,4,5]
}
