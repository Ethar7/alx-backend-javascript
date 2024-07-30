export default function appendToEachArrayValue(array, appendString) {
  const newarray = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    newarray[idx] = appendString + value;
  }

  return array;
}
