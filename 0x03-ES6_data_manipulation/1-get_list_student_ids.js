export default function getListStudentIds(arr) {
  if (!Array.isarray(arr)) {
    return [];
  }
  else {
    return arr.map((student) => student.id);
  }
}
