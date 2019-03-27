import stringToWordArray from './stringToWordArray';
import doCountForSingleLetter from './doCountForSingleLetter';
import doCountForTwoLetters from './doCountForTwoLetters';
import displayResult from './displayResult';
import displayWordArray from './displayWordArray';
import displayResultLabel from './displayResultLabel';
import getHighlightedWordArrayForSingleLetter from './getHighlightedWordArrayForSingleLetter';

const preamble = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

const wordArray = stringToWordArray(preamble);

const tButton = document.querySelector('.t-button');
const eButton = document.querySelector('.e-button');
const tAndEButton = document.querySelector('.t-e-button');

tButton.addEventListener('click', (event) => {
  const wordCount = doCountForSingleLetter(wordArray, 't', 'beginning');
  const resultLabel = 'words that begin with "t"';
  const tArray = getHighlightedWordArrayForSingleLetter(wordArray, 't', 'beginning');
  displayWordArray(tArray);
  displayResult(wordCount);
  displayResultLabel(resultLabel);
});

eButton.addEventListener('click', (event) => {
  const wordCount = doCountForSingleLetter(wordArray, 'e', 'end');
  const resultLabel = 'words that end with "e"';
  const eArray = getHighlightedWordArrayForSingleLetter(wordArray, 'e', 'end');
  displayWordArray(eArray);
  displayResult(wordCount);
  displayResultLabel(resultLabel);
});

tAndEButton.addEventListener('click', (event) => {
  const wordCount = doCountForTwoLetters(wordArray, 't', 'e');
  const resultLabel = 'words that begin with "t" and end with "e"';
  displayResult(wordCount);
  displayResultLabel(resultLabel);
});

displayWordArray(wordArray);
