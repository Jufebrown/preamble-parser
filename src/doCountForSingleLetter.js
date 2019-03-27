import isLetterAtPosition from './isLetterAtPosition';

export default function doCountForSingleLetter(wordArray, letter, position) {
  let wordCounter = 0;
  for (let i = 0; i < wordArray.length; i += 1) {
    if (isLetterAtPosition(wordArray[i], letter, position)) {
      wordCounter += 1;
    }
  }
  return wordCounter;
}
