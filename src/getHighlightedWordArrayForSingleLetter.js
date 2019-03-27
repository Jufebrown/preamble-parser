import isLetterAtPosition from './isLetterAtPosition';

export default function getHighlightedWordArrayForSingleLetter(wordArray, letter, position) {
  const workingArray = [];
  for (let i = 0; i < wordArray.length; i += 1) {
    let arrayElement;
    if (isLetterAtPosition(wordArray[i], letter, position)) {
      arrayElement = `<span class="highlight">${wordArray[i]}</span>`;
    } else {
      arrayElement = wordArray[i];
    }
    workingArray.push(arrayElement);
  }
  return workingArray;
}
