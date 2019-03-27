import stringToWordArray from './stringToWordArray';
import isLetterAtPosition from './isLetterAtPosition';

const preamble = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

const wordArray = stringToWordArray(preamble);

console.log('isLetterAtPosition("state", "s", "beginning")', isLetterAtPosition('state', 's', 'beginning'));
