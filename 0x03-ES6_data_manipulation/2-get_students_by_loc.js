export default function getStudentsByLocation(student, city) {
  return student.filter((pupil) => pupil.location === city);
}
