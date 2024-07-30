export default function createIteratorObject(report) {
let arr = [];
  for (const val of Object.val(report.allEmployees) {
     arr = [...arr, ...val];
  }
}
