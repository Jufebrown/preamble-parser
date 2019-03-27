import isLetterAtPosition from './isLetterAtPosition';

export default function getHighlightedWordArrayForTwoLetter(wordArray, beginningLetter, endLetter) {
  const workingArray = [];
  for (let i = 0; i < wordArray.length; i += 1) {
    let arrayElement;
    if (
      isLetterAtPosition(wordArray[i], beginningLetter, 'beginning')
      && isLetterAtPosition(wordArray[i], endLetter, 'end')
    ) {
      arrayElement = `<span class="highlight">${wordArray[i]}</span>`;
    } else {
      arrayElement = wordArray[i];
    }
    workingArray.push(arrayElement);
  }
  return workingArray;
}
