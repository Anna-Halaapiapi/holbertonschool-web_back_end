export default function getStudentsByLocation (studentArray, city) {
  // returns an array of objs who are located in a specific city
  const studentLocationArray = studentArray.filter(student => student.location === city);
  return studentLocationArray;
}