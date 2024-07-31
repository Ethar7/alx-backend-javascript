export default function createIteratorObject(report) {
  let arr = [];
  for (const idx of Object.values(report.allEmployees)) {
    arr.push(...idx);
  }
  return arr;
}
