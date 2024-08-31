export default function cleanSet(set, startString) {
  const final_str = [];
    // Iterate over each value in the set
  for (const value of set) {
        // Check if the value starts with the specified startString
    if (value.startswith(startString)) {
            // Append the rest of the string (after startString) to the cleanedValues array
      final_str.push(value.slice(startString.length));
    } 
    // Join the cleaned values using hyphens and return the resulting string
  }
return final_str.join('-');
}
