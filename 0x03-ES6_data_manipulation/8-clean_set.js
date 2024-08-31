export default function cleanSet(set, startString) {
  let finalStr = ''; // Renamed variable to follow camel case
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  set.forEach((value) => {
    if (value && value.startsWith(startString)) finalStr += `${value.slice(startString.length)}-`;
  });

  return finalStr.slice(0, finalStr.length - 1);
}
