export default function displayWordArray(wordArray) {
  document.querySelector('.preamble').innerHTML = wordArray.join('');
}
