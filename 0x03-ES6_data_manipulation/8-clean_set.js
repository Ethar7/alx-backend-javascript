export default function cleanSet(set, startString) {
  const finalStr = ''; // Renamed variable to follow camel case
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  // Iterate over each value in the set
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) { // Fixed method name
      // Append the rest of the string (after startString) to the cleanedValues array
      finalStr += value.slice(startString.length) + '-'; // استخدم عامل الجمع (+)
    }
  }

    // Remove the trailing hyphen and return the resulting string
    return finalStr.slice(0, -1); // قم بإزالة الواصلة النهائية
}
