{
  // problem-3
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  // Function ----> countWordOccurrences()
  function countWordOccurrences(sentenceStr: string, wordStr: string): number {
    sentenceStr = sentenceStr.toLowerCase();
    wordStr = wordStr.toLowerCase();

    const words: Array<string> = sentenceStr.split(" ");

    let count: number = 0;

    words.forEach((character: string): void => {
      if (character === wordStr) count++;
    });

    return count;
  }

  // Sample Input:
  console.log(countWordOccurrences("I love typescript", "typescript"));
  //output : 1
}
