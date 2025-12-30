export default function getStudentIdsSum (studentArray) {
  // returns sum of all student ids
  const sumOfIds = studentArray.reduce(
    (accumulator, currentValue) =>
        accumulator + currentValue.id, 0);
  return sumOfIds;
}