export default function stringToWordArray(stringToSplit) {
  return stringToSplit.split(/(?=[.\s]|\b)/);
}
