export default function isLetterAtPosition(word, letter, position) {
  const index = (position === 'beginning') ? 0 : word.length - 1;
  if (word.toLowerCase().charAt(index) === letter) {
    return true;
  }
  return false;
}
