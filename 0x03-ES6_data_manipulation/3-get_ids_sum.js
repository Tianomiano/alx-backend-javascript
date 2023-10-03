export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, next) => accumulator + next.id, 0);
}
