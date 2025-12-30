export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) { // if arg is not array, return empty array
    return [];
  }
  // use map function on array
  const idsArray = studentArray.map(student => student.id);
  return idsArray;
}
