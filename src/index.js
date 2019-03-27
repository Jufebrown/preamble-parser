import stringToWordArray from './stringToWordArray';
import doCountForSingleLetter from './doCountForSingleLetter';
import doCountForTwoLetters from './doCountForTwoLetters';
import displayResult from './displayResult';
import displayWordArray from './displayWordArray';

const preamble = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

const wordArray = stringToWordArray(preamble);

const tButton = document.querySelector('.t-button');
const eButton = document.querySelector('.e-button');
const tAndEButton = document.querySelector('.t-e-button');

tButton.addEventListener('click', (event) => {
  const wordCount = doCountForSingleLetter(wordArray, 't', 'beginning');
  displayResult(wordCount);
});

eButton.addEventListener('click', (event) => {
  const wordCount = doCountForSingleLetter(wordArray, 'e', 'end');
  displayResult(wordCount);
});

tAndEButton.addEventListener('click', (event) => {
  const wordCount = doCountForTwoLetters(wordArray, 't', 'e');
  displayResult(wordCount);
});

displayWordArray(wordArray);
