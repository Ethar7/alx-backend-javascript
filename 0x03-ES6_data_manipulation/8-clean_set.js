export default function cleanSet(set, startString) {
    const finalStr = []; // Renamed variable to follow camel case

    // Iterate over each value in the set
    for (const value of set) {
        // Check if the value starts with the specified startString
        if (value.startsWith(startString)) { // Fixed method name
            // Append the rest of the string (after startString) to the cleanedValues array
            finalStr.push(value.slice(startString.length));
        }
    }

    // Join the cleaned values using hyphens and return the resulting string
    return finalStr.join('-');
}
