export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((student) => student.location === city)
    .map((person) => {
      const grades = newGrades.filter((student) => student.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
