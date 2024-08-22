export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      for (let i = 0; i < newGrades.length; i += 1) {
        if (newGrades[i].studentId === student.id) {
          grade = newGrades[i].grade;
          break;
        }
      }
      return {
        ...student,
        grade, // استخدام الاختصار
      };
    });
}
