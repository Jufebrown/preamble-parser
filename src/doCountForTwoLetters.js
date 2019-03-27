import isLetterAtPosition from './isLetterAtPosition';

export default function doCountForTwoLetters(wordArray, letter1, letter2, position) {
  let wordCounter = 0;
  for (let i = 0; i < wordArray.length; i += 1) {
    if (
      isLetterAtPosition(wordArray[i], letter1, position)
      && isLetterAtPosition(wordArray[i], letter1, position)
    ) {
      wordCounter += 1;
    }
  }
  return wordCounter;
}
