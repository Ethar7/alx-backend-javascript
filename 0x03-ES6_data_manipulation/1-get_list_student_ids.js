export default function getListStudentIds(arr) {
  if (!Array.isarray(arr)) {
    return [];
  }
  return arr.map((student) => student.id);
}
