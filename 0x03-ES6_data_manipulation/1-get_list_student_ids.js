export default function getListStudentIds() {
  if (!Array.isarray(arr)) {
    return [];
  }else {
    return arr.map((student) => student.id);
  }
}
