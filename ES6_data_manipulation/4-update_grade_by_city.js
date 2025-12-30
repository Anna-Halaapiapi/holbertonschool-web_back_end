export default function updateStudentGradeByCity (studentArray, city, newGrades) {
  // returns an array of students for a specific city with their new grade
 const gradesArray = studentArray
   .filter(student => student.location === city) // keep students from specified city
   // transform filtered students into new object structure
   .map(student => {
    const checkExists = (newGrades.find(item => item.studentId === student.id))
    if (checkExists === undefined) {
      student.grade = 'N/A'
    } else {student.grade = checkExists.grade}

    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: student.grade
    }
   });
   return gradesArray;
}
