export default function createIteratorObject(report) {
  const arr = [];
  for (const idx of Object.values(report.allEmployees)) {
    arr.push(...idx);
  }
  return arr;
}
