import isLetterAtPosition from './isLetterAtPosition';

export default function doCountForTwoLetters(wordArray, beginningLetter, endingLetter) {
  let wordCounter = 0;
  for (let i = 0; i < wordArray.length; i += 1) {
    if (
      isLetterAtPosition(wordArray[i].toLowerCase(), beginningLetter, 'beginning')
      && isLetterAtPosition(wordArray[i].toLowerCase(), endingLetter, 'end')
    ) {
      wordCounter += 1;
    }
  }
  return wordCounter;
}
