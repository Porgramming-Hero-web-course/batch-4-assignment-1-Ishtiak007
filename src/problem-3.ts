{
  // problem-3
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  // Function ----> countWordOccurrences()
  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceLowercase = sentence.toLocaleLowerCase();
    const wordLowercase = word.toLocaleLowerCase();

    return sentenceLowercase.split(wordLowercase).length - 1;
  };

  // Sample Input:
  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript!",
      "typescript"
    )
  );
  //output : 2

  console.log(
    countWordOccurrences(
      "amader desher nam bangladesh, amader desher nam bangladesh",
      "amader"
    )
  );
  // output : 2
}
